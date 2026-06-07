# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication Header
```
Authorization: Bearer <JWT_TOKEN>
```

---

## Key Endpoints

### Authentication
- `POST /auth/register` - Register user
- `POST /auth/login` - Login user

### OCR
- `POST /ocr/extract` - Extract text from image

### Summarization
- `POST /notes/:id/summarize` - Generate AI summary

### AI Tutor (NEW)
- `POST /tutor/explain` - Get AI explanation
  - Request: `{ "text": "concept", "level": "simple" or "expanded" }`
  - Response: `{ "explanation": "..." }`

### Text-to-Speech
- `POST /tts/generate` - Generate audio from text

### Flashcards
- `GET /flashcards` - Get all flashcards
- `POST /flashcards` - Create flashcard

### Timetable
- `POST /timetable/generate` - Generate AI timetable

### Settings
- `GET /settings` - Get user settings
- `PUT /settings` - Update settings (theme, text direction, etc)

See full documentation in API.md
