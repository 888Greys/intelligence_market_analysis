#!/bin/bash

# Kenya Market Intelligence Dashboard - Network Startup Script
echo "🇰🇪 Starting Kenya Market Intelligence Dashboard..."
echo ""

# Check if API key is set
if [ -z "$GOOGLE_GENERATIVE_AI_API_KEY" ]; then
    echo "⚠️  Google AI API key not found in environment"
    echo "   Please set your API key first:"
    echo "   export GOOGLE_GENERATIVE_AI_API_KEY=\"your-api-key-here\""
    echo ""
fi

# Build and start the server
echo "🔨 Building application..."
npm run build

echo ""
echo "🚀 Starting server with network access..."
echo "   The dashboard will be accessible from any device on your network"
echo ""

# Start the server
npm start
