# Study Plan - Mobile App

**An AI-powered mobile learning companion for students**

## 🚀 Features

✅ **Photo & Note Scanning** - Capture or upload images of notes
✅ **OCR Text Extraction** - Extract text from images using Google Cloud Vision
✅ **AI Summarization** - Get concise summaries of your notes
✅ **AI Tutor** - Learn concepts explained in simple or expanded terms
✅ **Text-to-Speech** - Listen to your notes, summaries, and tutoring content
✅ **Flashcard System** - Create and study with interactive flashcards
✅ **AI Timetable Generator** - Get an optimized study schedule
✅ **Settings** - Dark/Light mode, Text direction (LTR/RTL), Language support
✅ **Cross-Device Sync** - All data synced to cloud

## 🛠️ Tech Stack

**Frontend**: React Native + Expo
**Backend**: Node.js + Express.js + MongoDB
**AI**: OpenAI GPT-4 (for tutoring, summarization, timetable generation)
**OCR**: Google Cloud Vision API
**TTS**: Google Cloud Text-to-Speech
**Storage**: AWS S3 + MongoDB

## 📱 Main Dashboard Buttons

1. **📷 Take Photo** - Open camera to scan notes
2. **📤 Upload Image** - Upload images from device gallery
3. **🎓 Make Flashcards** - Create study flashcards
4. **📚 AI Tutor** - Get AI explanations (simple or expanded terms)
5. **⚙️ Settings** - Customize theme, text direction, and more

## 🎓 AI Tutor Feature

The AI Tutor button allows you to:
- Enter any text or concept
- Choose explanation level:
  - **Simple**: Layman's terms anyone can understand
  - **Expanded**: Detailed explanation with examples
- Listen to explanations via text-to-speech
- Save explanations to your notes

## 🚀 Quick Start

```bash
# Backend
cd backend
npm install
cp .env.example .env
# Fill in your API keys in .env
npm run dev

# Mobile (in another terminal)
cd frontend
npm install
npm start
```

For detailed setup, see [docs/SETUP.md](./docs/SETUP.md)

## 📚 Documentation

- [Setup Guide](./docs/SETUP.md) - Installation & configuration
- [API Documentation](./docs/API.md) - Complete API reference
- [Project Structure](./PROJECT_STRUCTURE.md) - Architecture overview

## 📝 License

MIT
