# Quick Start Guide

## Installation

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Fill in `.env` with:
- `MONGODB_URI` - MongoDB connection
- `JWT_SECRET` - Secret key
- `OPENAI_API_KEY` - OpenAI API key

```bash
npm run dev
```

### Mobile App Setup

```bash
cd frontend
npm install
```

```bash
npm start
```

Scan QR code with Expo Go app.

## Project Structure

```
Study-Plan/
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── middleware/
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── screens/
│   │   ├── api/
│   │   ├── context/
│   │   └── assets/
│   ├── app.json
│   └── package.json
└── docs/
    ├── SETUP.md
    ├── API.md
    └── ARCHITECTURE.md
```

## Features

✅ **Photo Scanning** - Capture notes via camera
✅ **OCR** - Extract text from images
✅ **AI Summarization** - Generate summaries
✅ **AI Tutor** - Explain in simple or expanded terms
✅ **Text-to-Speech** - Listen to content
✅ **Flashcards** - Create and study
✅ **Timetable** - AI-generated study schedules
✅ **Dark Mode** - Light/Dark theme
✅ **Settings** - Customize preferences
✅ **Cloud Sync** - Sync across devices

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register
- `POST /api/auth/login` - Login

### Notes
- `GET /api/notes` - List notes
- `POST /api/notes` - Create note
- `POST /api/notes/:id/summarize` - Summarize

### AI Tutor
- `POST /api/tutor/explain` - Get explanation

### Flashcards
- `GET /api/flashcards` - List
- `POST /api/flashcards` - Create

### Timetable
- `GET /api/timetable` - List
- `POST /api/timetable/generate` - Generate AI schedule

## Next Steps

1. Configure API keys in `.env`
2. Run backend server
3. Start mobile app
4. Test authentication
5. Test OCR with sample image
6. Test AI features

## Support

For issues, check:
- Backend logs
- Mobile console (Expo)
- Network connectivity
- API configuration
