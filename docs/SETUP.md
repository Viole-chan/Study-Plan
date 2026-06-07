# Setup Guide

## Prerequisites
- Node.js v16+
- MongoDB (local or Atlas)
- Expo CLI
- Git

## Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Create .env File
```bash
cp .env.example .env
```

Fill in your credentials:
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Your JWT secret key
- `OPENAI_API_KEY` - OpenAI API key
- `GOOGLE_CLOUD_VISION_KEY` - Google Cloud Vision credentials
- `GOOGLE_TTS_API_KEY` - Google Text-to-Speech API key
- `AWS_*` - AWS S3 credentials

### 3. Start MongoDB
```bash
mongod
# Or use MongoDB Atlas cloud service
```

### 4. Start Backend Server
```bash
npm run dev
```
Server runs on `http://localhost:5000`

## Mobile App Setup

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Start Expo
```bash
npm start
```

Scan QR code with Expo Go app or:
```bash
npm run android  # For Android emulator
npm run ios      # For iOS simulator
```

## Running Both Simultaneously

```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm start
```
