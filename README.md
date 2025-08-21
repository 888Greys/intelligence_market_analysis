# 🇰🇪 Kenya Market Intelligence Dashboard

> **AI-Powered Market Research Platform for East African Business Opportunities**

A professional, real-time market research dashboard specifically designed for the Kenyan and East African markets. Built with TypeScript, Express.js, and Google's Gemini AI, featuring mobile-responsive design and network accessibility.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

## 🚀 Features

### 📊 **Market Research Categories**
- **💳 M-Pesa Ecosystem Analysis** - Market expansion and competition tracking
- **📱 Digital Lending Platforms** - Tala, Branch, KCB M-Pesa, Fuliza analysis
- **₿ Cryptocurrency Adoption** - Kenya vs African markets comparison  
- **🌍 Cross-border Payments** - EAC trade and regional fintech
- **🌾 AgriTech & Precision Farming** - Agricultural technology adoption
- **⚡ Renewable Energy** - Solar, mini-grids, clean energy trends
- **🛒 E-commerce Growth** - Jumia vs local platforms analysis
- **🏥 HealthTech & Telemedicine** - Digital health solutions

### 🎯 **Professional Features**
- **Real-time AI research** using Google's Gemini model
- **Dynamic data visualizations** with Chart.js
- **Professional citations** and source verification
- **Mobile-responsive design** optimized for Kenya's mobile-first market
- **Network accessibility** with QR code generation
- **Professional typography** and formatting
- **Academic-grade citations** for credibility

### 🌐 **Technical Capabilities**
- **RESTful API** for data access
- **TypeScript** for type safety
- **Express.js** web server
- **Real-time updates** without page refresh
- **Cross-device compatibility**
- **Professional PDF-style formatting**

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **Google AI API Key** (Gemini access)
- **Modern web browser**
- **Network connection** for real-time research

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kenya-market-intelligence-dashboard.git
   cd kenya-market-intelligence-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   export GOOGLE_GENERATIVE_AI_API_KEY="your-google-ai-api-key"
   ```

4. **Build the application**
   ```bash
   npm run build
   ```

5. **Start the server**
   ```bash
   npm start
   ```

## 🚀 Quick Start

### Local Access
```bash
# Set your API key
export GOOGLE_GENERATIVE_AI_API_KEY="your-api-key-here"

# Start the dashboard
npm start

# Access at: http://localhost:3000
```

### Network Access
The dashboard automatically enables network access and displays:
- **Local URL:** `http://localhost:3000`
- **Network URL:** `http://your-ip:3000`
- **QR Code:** For easy mobile access

### Using the Dashboard
1. **Select a research category** from the predefined options
2. **Or enter a custom topic** in the search field
3. **Click "Research Topic"** to generate analysis
4. **View results** with formatted text, charts, and citations
5. **Access from any device** on your network

## 📁 Project Structure

```
kenya-market-intelligence-dashboard/
├── 📄 README.md                    # This documentation
├── 📄 package.json                 # Dependencies and scripts
├── 📄 tsconfig.json               # TypeScript configuration
├── 📄 server.ts                   # Main server application
├── 📄 start-network.sh            # Network startup script
├── 📁 public/                     # Static web assets
│   └── 📄 index.html              # Frontend dashboard
└── 📁 node_modules/               # Dependencies
```

## 🔧 Configuration

### Environment Variables
```bash
# Required
GOOGLE_GENERATIVE_AI_API_KEY=your-google-ai-api-key

# Optional
PORT=3000                          # Server port (default: 3000)
```

### TypeScript Configuration
The project uses strict TypeScript settings with:
- **ES2020 target**
- **Node.js module resolution**
- **Strict type checking**
- **Source maps** for debugging

## 🌐 API Endpoints

### GET `/`
Returns the main dashboard interface

### GET `/api/data`
Returns current market research data
```json
{
  "marketTrends": "string",
  "chartConfigs": "ChartConfiguration[]",
  "sources": "object[]",
  "lastUpdated": "string"
}
```

### POST `/api/refresh`
Triggers new market research
```json
{
  "topic": "string"
}
```

## 📱 Mobile & Network Features

### Network Access
- **Automatic IP detection** and display
- **QR code generation** for mobile access
- **Cross-device synchronization**
- **Mobile-optimized interface**

### Mobile Optimizations
- **Touch-friendly buttons** (44px minimum)
- **Responsive typography** scaling
- **Mobile chart optimizations**
- **Auto-scroll to results**
- **Optimized loading states**

## 🎨 Design Features

### Professional Typography
- **Bold key metrics** and company names
- **Hierarchical headings** (H1, H2, H3)
- **Highlighted important terms**
- **Academic-style formatting**
- **Readable line spacing** and padding

### Visual Elements
- **Gradient backgrounds** and buttons
- **Professional color scheme** (Blue/Green)
- **Interactive charts** with animations
- **Loading states** with spinners
- **Status notifications**

## 🔍 Kenya Market Focus

### Specialized Research Areas
- **Fintech leadership** (M-Pesa, digital lending)
- **Agricultural technology** adoption
- **Renewable energy** market trends
- **E-commerce growth** patterns
- **Healthcare digitization**
- **Regional trade** dynamics

### Credible Sources
- **Safaricom Annual Reports**
- **Central Bank of Kenya** data
- **GSMA Mobile Money** reports
- **Kenya Economic Survey**
- **World Bank** Kenya updates
- **African Development Bank** reports

## 🚀 Business Applications

### Target Users
- **🏦 Banks & Financial Institutions** - Competitive intelligence
- **💰 Investors & VCs** - Market opportunity assessment
- **🚀 Startups** - Market validation and research
- **📊 Consultants** - Professional client reports
- **🏛️ Government Agencies** - Policy development insights
- **🌍 International Companies** - Kenya market entry

### Use Cases
- **Investment due diligence**
- **Market entry strategies**
- **Competitive analysis**
- **Policy development**
- **Academic research**
- **Business plan development**

## 📊 Performance & Scalability

### Technical Specifications
- **Response Time:** < 30 seconds for new research
- **Concurrent Users:** Supports multiple network users
- **Chart Rendering:** Hardware-accelerated with Chart.js
- **Mobile Performance:** Optimized animations and fonts
- **Network Efficiency:** Compressed data transfer

### Browser Support
- **Chrome/Safari** (Recommended)
- **Firefox** 
- **Edge**
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🔒 Security Considerations

### API Security
- **Environment variables** for sensitive keys
- **Network binding** to specific interfaces
- **CORS protection** when needed
- **Input validation** with Zod schemas

### Network Access
- **Local network only** (not exposed to internet)
- **Firewall considerations** for port 3000
- **API key protection** in environment

## 🛠️ Development

### Available Scripts
```bash
npm start      # Build and start production server
npm run dev    # Start development server with hot reload
npm run build  # Compile TypeScript to JavaScript
npm test       # Run tests (placeholder)
```

### Development Workflow
1. **Make changes** to `server.ts` or `public/index.html`
2. **Run** `npm run build` to compile TypeScript
3. **Test** changes with `npm start`
4. **Access** at `http://localhost:3000`

### Adding New Research Categories
1. **Update the category buttons** in `public/index.html`
2. **Add fallback sources** in `createFallbackSources()` function
3. **Test** the new category research

## 🐛 Troubleshooting

### Common Issues

**"No sources available"**
- Check Google AI API key is set correctly
- Verify network connection
- Fallback sources will be used automatically

**"Server won't start"**
- Ensure port 3000 is not in use: `lsof -i :3000`
- Check API key environment variable
- Verify all dependencies are installed

**"Can't access from mobile"**
- Ensure devices are on same network
- Check firewall settings for port 3000
- Try the QR code for easy access

**Charts not displaying**
- Check browser console for JavaScript errors
- Ensure modern browser with Canvas support
- Verify Chart.js is loading properly

### Debug Mode
```bash
# Enable verbose logging
DEBUG=* npm start
```

## 🤝 Contributing

### Development Setup
1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Code Standards
- **TypeScript strict mode**
- **ESLint** for code quality
- **Prettier** for formatting
- **Semantic commit messages**

## 📝 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google AI** for Gemini API access
- **Chart.js** for beautiful visualizations
- **Express.js** for robust web server
- **Kenya fintech ecosystem** for inspiration
- **Open source community** for amazing tools

## 📞 Support

### Getting Help
- **Issues:** Open a GitHub issue for bugs or feature requests
- **Discussions:** Use GitHub Discussions for questions
- **Documentation:** Check this README for common solutions

### Contact

- **Email:** kipronohm8@gmail.com



---

**🇰🇪 Built with ❤️ for the East African business ecosystem**

> *Empowering data-driven decisions in Africa's most dynamic market*
