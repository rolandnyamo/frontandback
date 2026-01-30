@echo off
REM Travel Booking Platform Setup Script for Windows

echo 🚀 Setting up Travel Booking Platform...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 16+ and try again.
    exit /b 1
)

REM Check if MongoDB is available
mongod --version >nul 2>&1
if errorlevel 1 (
    echo ⚠️  MongoDB is not installed. Please install MongoDB or use MongoDB Atlas.
    echo    For MongoDB Atlas: https://www.mongodb.com/cloud/atlas
)

echo 📦 Installing dependencies...

REM Install root dependencies
call npm install

REM Install backend dependencies
echo Installing backend dependencies...
cd backend
call npm install
cd ..

REM Install frontend dependencies
echo Installing frontend dependencies...
cd frontend
call npm install
cd ..

echo 📝 Setting up environment files...

REM Copy environment template for backend
if not exist "backend\.env" (
    copy "backend\.env.example" "backend\.env"
    echo ✅ Created backend/.env from template
    echo ⚠️  Please update the environment variables in backend/.env
) else (
    echo ℹ️  backend/.env already exists
)

echo 🔧 Setup complete!
echo.
echo Next steps:
echo 1. Start MongoDB service (if running locally)
echo 2. Update backend/.env with your configuration
echo 3. Run 'npm run dev' to start both frontend and backend
echo.
echo Available commands:
echo   npm run dev          - Start both frontend and backend in development mode
echo   npm run dev:backend  - Start only the backend server
echo   npm run dev:frontend - Start only the frontend app
echo   npm run build        - Build both applications for production
echo.
echo Happy coding! 🎉

pause