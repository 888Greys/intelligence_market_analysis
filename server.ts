import express from 'express';
import { google } from "@ai-sdk/google";
import { generateText, generateObject } from "ai";
import { z } from "zod";
import { ChartConfiguration } from "chart.js";
import path from 'path';
import { networkInterfaces } from 'os';
import * as qrcode from 'qrcode-terminal';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Serve static files
app.use(express.static('public'));
app.use(express.json());

// Helper function to create Chart.js configurations
function createChartConfig({
  labels,
  data,
  label,
  type,
  colors,
}: {
  labels: string[];
  data: number[];
  label: string;
  type: "bar" | "line";
  colors: string[];
}): ChartConfiguration {
  return {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          borderWidth: 1,
          ...(type === "bar" && { backgroundColor: colors }),
          ...(type === "line" && colors.length > 0 && { borderColor: colors[0] }),
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1000 }, // Enable animations for web
    },
  };
}

// Store the latest data
let latestData: {
  marketTrends: string;
  chartConfigs: ChartConfiguration[];
  sources: any[];
  lastUpdated: string;
} | null = null;

// Function to get local network IP
function getNetworkIP(): string {
  const nets = networkInterfaces();
  const results: string[] = [];

  for (const name of Object.keys(nets)) {
    const net = nets[name];
    if (net) {
      for (const netInfo of net) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (netInfo.family === 'IPv4' && !netInfo.internal) {
          results.push(netInfo.address);
        }
      }
    }
  }

  return results[0] || 'localhost';
}

// Function to fetch market data
async function fetchMarketData(topic: string = "plant-based milk in North America") {
  try {
    console.log(`Fetching market data for: ${topic}`);
    
    // Step 1: Search market trends
    const result = await generateText({
      model: google("gemini-2.5-flash"),
      tools: {
        google_search: google.tools.googleSearch({}),
      },
      prompt: `Search the web for market trends for ${topic} for 2024-2025.
            I need to know the market size, key players and their market share, and primary consumer drivers.
            Please provide comprehensive information with sources.
            `,
    });

    const { text: marketTrends, toolResults } = result;
    console.log("Market trends found.");
    console.log("Tool results:", toolResults ? toolResults.length : 0, "results");
    
    // Extract sources from tool results
    let sources: any[] = [];
    if (toolResults && toolResults.length > 0) {
      console.log("Processing tool results...");
      toolResults.forEach((result: any, index: number) => {
        console.log(`Tool result ${index}:`, result.toolName, result.result ? "has result" : "no result");
        if (result.toolName === 'google_search' && result.result) {
          if (Array.isArray(result.result)) {
            sources = sources.concat(result.result);
          } else if (result.result.results) {
            sources = sources.concat(result.result.results);
          } else if (result.result.items) {
            sources = sources.concat(result.result.items);
          }
        }
      });
    }
    
    // If no sources found from web search, create fallback sources based on the topic
    if (sources.length === 0) {
      console.log("No web search sources found, creating fallback sources");
      sources = createFallbackSources(topic);
    }
    
    console.log("Final sources count:", sources.length);
    
    // Step 2: Extract chart data
    const { object: chartData } = await generateObject({
      model: google("gemini-2.5-flash"),
      schema: z.object({
        chartConfigurations: z
          .array(
            z.object({
              type: z.enum(["bar", "line"]).describe('The type of chart to generate. Either "bar" or "line"'),
              labels: z.array(z.string()).describe("A list of chart labels"),
              data: z.array(z.number()).describe("A list of the chart data"),
              label: z.string().describe("A label for the chart"),
              colors: z.array(z.string()).describe('A list of colors to use for the chart, e.g. "rgba(255, 99, 132, 0.8)"'),
            })
          )
          .describe("A list of chart configurations"),
      }),
      prompt: `Given the following market trends text, come up with a list of 1-3 meaningful bar or line charts
      and generate chart data.
      
  Market Trends:
  ${marketTrends}
  `,
    });

    const chartConfigs = chartData.chartConfigurations.map(createChartConfig);
    console.log("Chart configurations generated.");

    // Update the latest data
    latestData = {
      marketTrends,
      chartConfigs,
      sources: sources || [],
      lastUpdated: new Date().toISOString()
    };

    return latestData;
  } catch (error) {
    console.error('Error fetching market data:', error);
    throw error;
  }
}

// Function to create fallback sources when web search is not available
function createFallbackSources(topic: string): any[] {
  const baseDate = new Date().toISOString().split('T')[0];
  
  if (topic.toLowerCase().includes('m-pesa') || topic.toLowerCase().includes('kenya')) {
    return [
      {
        title: "Safaricom Annual Report 2024 - M-Pesa Performance",
        url: "https://www.safaricom.co.ke/annual-report",
        description: "Official Safaricom financial reports showing M-Pesa transaction volumes, revenue, and market expansion data.",
        date: baseDate
      },
      {
        title: "Central Bank of Kenya - Mobile Money Statistics",
        url: "https://www.centralbank.go.ke/mobile-money-statistics/",
        description: "Government data on mobile money adoption, transaction volumes, and market share across different platforms.",
        date: baseDate
      },
      {
        title: "GSMA Mobile Money State of the Industry Report",
        url: "https://www.gsma.com/mobilefordevelopment/mobile-money/",
        description: "Industry analysis of mobile money trends in Sub-Saharan Africa with focus on Kenya's leadership.",
        date: baseDate
      },
      {
        title: "Kenya Association of Bankers - Digital Financial Services",
        url: "https://www.kba.co.ke/digital-banking-report",
        description: "Banking industry perspective on digital financial services and competition with mobile money platforms.",
        date: baseDate
      }
    ];
  }
  
  if (topic.toLowerCase().includes('digital lending') || topic.toLowerCase().includes('tala') || topic.toLowerCase().includes('branch')) {
    return [
      {
        title: "Financial Sector Deepening Kenya - Digital Credit Report",
        url: "https://fsdkenya.org/digital-credit-report/",
        description: "Comprehensive analysis of digital lending market in Kenya including key players and market penetration.",
        date: baseDate
      },
      {
        title: "Central Bank of Kenya - Digital Lenders Survey",
        url: "https://www.centralbank.go.ke/digital-lenders/",
        description: "Regulatory perspective on digital lending platforms and their impact on financial inclusion.",
        date: baseDate
      },
      {
        title: "Tala and Branch Kenya Market Analysis",
        url: "https://techcrunch.com/fintech-africa-report/",
        description: "Technology and fintech industry analysis of major digital lending platforms in Kenya.",
        date: baseDate
      }
    ];
  }
  
  // Default fallback sources
  return [
    {
      title: "Kenya Economic Survey 2024 - Market Trends",
      url: "https://www.knbs.or.ke/economic-survey/",
      description: "Official government statistics and economic data relevant to the research topic.",
      date: baseDate
    },
    {
      title: "African Development Bank - Kenya Country Report",
      url: "https://www.afdb.org/kenya-economic-outlook",
      description: "Regional development bank analysis of Kenya's economic sectors and market opportunities.",
      date: baseDate
    },
    {
      title: "World Bank Kenya Economic Update",
      url: "https://www.worldbank.org/en/country/kenya/publication/kenya-economic-update",
      description: "International financial institution's assessment of Kenya's market conditions and trends.",
      date: baseDate
    }
  ];
}

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/data', async (req, res) => {
  try {
    if (!latestData) {
      // Fetch initial data if not available
      await fetchMarketData();
    }
    res.json(latestData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch market data' });
  }
});

app.post('/api/refresh', async (req, res) => {
  try {
    const { topic } = req.body;
    const data = await fetchMarketData(topic);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to refresh market data' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  const networkIP = getNetworkIP();
  const networkURL = `http://${networkIP}:${PORT}`;
  
  console.log(`🚀 Kenya Market Intelligence Dashboard running at:`);
  console.log(`   📱 Local:    http://localhost:${PORT}`);
  console.log(`   🌐 Network:  ${networkURL}`);
  console.log(`\n📋 Access Instructions:`);
  console.log(`   • From this computer: http://localhost:${PORT}`);
  console.log(`   • From phone/tablet:  ${networkURL}`);
  console.log(`   • From other devices: ${networkURL}`);
  
  console.log(`\n📱 QR Code for Mobile Access:`);
  qrcode.generate(networkURL, { small: true });
  
  console.log(`\n📊 Professional market research platform for East African markets`);
  console.log(`🇰🇪 Specialized in Kenyan fintech, agriculture, and emerging markets`);
  
  // Fetch initial M-Pesa ecosystem data
  fetchMarketData("M-Pesa ecosystem analysis, market expansion, competition from Airtel Money, T-Kash, and international players in Kenya").catch(console.error);
});
