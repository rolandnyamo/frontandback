#!/bin/bash

# Travel Booking Platform Setup Script
echo "🚀 Setting up Travel Booking Platform..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ and try again."
    exit 1
fi

# Check if MongoDB is running
if ! command -v mongod &> /dev/null; then
    echo "⚠️  MongoDB is not installed. Please install MongoDB or use MongoDB Atlas."
    echo "   For MongoDB Atlas: https://www.mongodb.com/cloud/atlas"
fi

echo "📦 Installing dependencies..."

# Install root dependencies
npm install

# Install backend dependencies
echo "Installing backend dependencies..."
cd backend && npm install
cd ..

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend && npm install
cd ..

echo "📝 Setting up environment files..."

# Copy environment template for backend
if [ ! -f "backend/.env" ]; then
    cp backend/.env.example backend/.env
    echo "✅ Created backend/.env from template"
    echo "⚠️  Please update the environment variables in backend/.env"
else
    echo "ℹ️  backend/.env already exists"
fi

echo "🔧 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Start MongoDB service (if running locally)"
echo "2. Update backend/.env with your configuration"
echo "3. Run 'npm run dev' to start both frontend and backend"
echo ""
echo "Available commands:"
echo "  npm run dev          - Start both frontend and backend in development mode"
echo "  npm run dev:backend  - Start only the backend server"
echo "  npm run dev:frontend - Start only the frontend app"
echo "  npm run build        - Build both applications for production"
echo ""
echo "Happy coding! 🎉"