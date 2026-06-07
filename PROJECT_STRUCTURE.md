# Study Plan - Mobile App Structure

## Project Overview
A comprehensive mobile learning application with OCR, AI summarization, tutoring, note-taking, flashcards, and timetable generation.

## Tech Stack

### Frontend (Mobile)
- **Framework**: React Native / Expo
- **State Management**: Zustand
- **Navigation**: React Navigation
- **Styling**: NativeWind + TailwindCSS

### Backend
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **File Storage**: AWS S3

### AI & External Services
- **OCR**: Google Cloud Vision API (best accuracy)
- **Summarization & AI Tutor**: OpenAI GPT-4
- **Text-to-Speech**: Google Cloud Text-to-Speech
- **Timetable Generation**: OpenAI GPT-4

## Core Features

### 1. Main Dashboard
Navigational hub with 5 main action buttons:
- 📷 **Take Photo** - Capture notes via camera
- 📤 **Upload Image** - Upload existing images
- 🎓 **Make Flashcards** - Create study flashcards
- 📝 **View Notes** - Access all scanned notes
- ⚙️ **Settings** - Configure app preferences

### 2. AI Tutor (NEW FEATURE)
**Feature**: Explains concepts in two modes:
- **Simple Terms** (Layman's Level): Easy-to-understand explanations for anyone
- **Expanded** (Detailed Level): Comprehensive explanations with examples

Users can:
- Enter any text or concept
- Choose explanation level (simple/expanded)
- Listen via Text-to-Speech
- Save explanations to notes

### 3. OCR & Note Processing
- Real-time camera capture
- Image upload functionality
- Google Cloud Vision OCR integration
- Extracted text display and editing

### 4. AI Summarization
- Condense notes into key points
- Generate concise summaries
- Save summaries with original notes

### 5. Text-to-Speech
- Listen to summaries
- Listen to tutoring explanations
- Listen to full notes
- Adjustable speed and pitch

### 6. Timetable Generator
- AI-powered schedule creation
- Subjects and duration input
- Break scheduling (50 min study + 10 min break)
- Weekly view with optimization

### 7. Flashcard System
- Create from notes
- Difficulty levels (Easy, Medium, Hard)
- Spaced repetition tracking
- Review history

### 8. Settings
- **Theme**: Dark/Light mode toggle
- **Text Direction**: LTR (Left-to-Right) / RTL (Right-to-Left)
- **Language**: Multi-language support
- **Audio**: TTS enable/disable
- **Text Size**: Small/Medium/Large

## Getting Started

See [docs/SETUP.md](./docs/SETUP.md) for installation instructions.
See [docs/API.md](./docs/API.md) for API documentation.
