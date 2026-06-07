# Study Plan - Mobile App

**An AI-powered study companion for students**

<p align="center">
  <strong>📚 Scan • Summarize • Learn • Study • Master</strong>
</p>

## ✨ Features

### 📸 Photo Scanning
- Capture notes via camera
- Upload images from gallery
- OCR text extraction (Google Cloud Vision)

### 🤖 AI-Powered Learning
- **Summarization**: Get concise summaries of your notes
- **AI Tutor**: Learn concepts in simple (layman's) or expanded (detailed) terms
- **Text-to-Speech**: Listen to your content
- **Timetable Generator**: AI-created study schedules

### 📝 Study Tools
- Create flashcards from notes
- Study with interactive cards
- Track review progress
- Difficulty levels (Easy, Medium, Hard)

### ⚙️ Customization
- 🌓 Dark/Light mode
- 🔤 Text size adjustment
- 📖 Text direction (LTR/RTL)
- 🗣️ Multiple languages
- 🔊 Text-to-Speech toggle

### ☁️ Cloud Sync
- Sign up and login
- All data synced across devices
- Secure authentication

## 🏗️ Architecture

### Frontend
- **Framework**: React Native + Expo
- **Navigation**: React Navigation
- **State Management**: Context API + AsyncStorage
- **Styling**: React Native StyleSheet

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **AI**: OpenAI GPT-4
- **OCR**: Google Cloud Vision

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB
- Expo CLI
- OpenAI API key
- Google Cloud Vision key

### Installation

**Backend:**
```bash
cd backend
npm install
cp .env.example .env
# Configure .env
npm run dev
```

**Mobile:**
```bash
cd frontend
npm install
npm start
```

## 📖 Documentation

- [QUICKSTART.md](./QUICKSTART.md) - Get started in 5 minutes
- [docs/SETUP.md](./docs/SETUP.md) - Detailed setup guide
- [docs/API.md](./docs/API.md) - API documentation
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Architecture overview
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contributing guidelines

## 🎯 Use Cases

1. **Students** - Scan textbook pages, get summaries, learn via AI tutor
2. **Teachers** - Create study materials, generate timetables
3. **Self-Learners** - Organize notes, review with flashcards
4. **Language Learners** - Multiple language support, text-to-speech

## 📱 App Screens

1. **Home** - Main dashboard with action buttons
2. **Camera** - Scan notes and documents
3. **Notes** - View and manage scanned notes
4. **AI Tutor** - Get explanations in any complexity level
5. **Flashcards** - Study with interactive cards
6. **Timetable** - View AI-generated study schedules
7. **Settings** - Customize preferences

## 🔐 Security

- Password hashing (bcryptjs)
- JWT authentication
- Rate limiting
- CORS enabled
- Helmet for security headers

## 📊 Data Models

- **Users** - Profile & preferences
- **Notes** - Scanned content & summaries
- **Flashcards** - Q&A cards with difficulty
- **Timetables** - Study schedules

## 🛠️ Tech Stack

```
Frontend:           Backend:
├─ React Native     ├─ Node.js
├─ Expo             ├─ Express.js
├─ React Navigation ├─ MongoDB
├─ AsyncStorage     ├─ JWT
└─ Axios            ├─ OpenAI
                    └─ Google Vision
```

## 📝 License

MIT License - see [LICENSE.md](./LICENSE.md)

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md)

## 📞 Support

- 📧 Email: support@studyplan.app
- 🐛 Issues: [GitHub Issues](https://github.com/Viole-chan/Study-Plan/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/Viole-chan/Study-Plan/discussions)

## 🎉 Version

Study Plan v1.0.0

---

**Made with ❤️ for students everywhere**
