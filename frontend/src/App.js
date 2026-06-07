import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Theme Store
const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const [textDirection, setTextDirection] = useState('ltr');
  const [ttsEnabled, setTtsEnabled] = useState(true);
  
  const colors = isDark ? {
    bg: '#1a1a1a',
    text: '#fff',
    card: '#2a2a2a',
    primary: '#007AFF',
    secondary: '#666'
  } : {
    bg: '#fff',
    text: '#000',
    card: '#f5f5f5',
    primary: '#007AFF',
    secondary: '#999'
  };
  
  return { isDark, setIsDark, textDirection, setTextDirection, ttsEnabled, setTtsEnabled, colors };
};

// Main Screen
function MainScreen({ navigation, theme }) {
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.bg }]}>
      <Text style={[styles.header, { color: theme.colors.text }]}>📚 Study Plan</Text>
      <Text style={[styles.subtitle, { color: theme.colors.secondary }]}>Choose what you want to do</Text>
      
      <View style={styles.grid}>
        <TouchableOpacity 
          style={[styles.menuCard, { backgroundColor: theme.colors.card }]}
          onPress={() => navigation.navigate('Camera')}
        >
          <Text style={styles.icon}>📷</Text>
          <Text style={[styles.cardText, { color: theme.colors.text }]}>Take Photo</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.menuCard, { backgroundColor: theme.colors.card }]}
          onPress={() => navigation.navigate('Upload')}
        >
          <Text style={styles.icon}>📁</Text>
          <Text style={[styles.cardText, { color: theme.colors.text }]}>Upload Image</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.menuCard, { backgroundColor: theme.colors.card }]}
          onPress={() => navigation.navigate('Flashcards')}
        >
          <Text style={styles.icon}>🗂️</Text>
          <Text style={[styles.cardText, { color: theme.colors.text }]}>Flashcards</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.menuCard, { backgroundColor: theme.colors.card }]}
          onPress={() => navigation.navigate('Tutor')}
        >
          <Text style={styles.icon}>🎓</Text>
          <Text style={[styles.cardText, { color: theme.colors.text }]}>AI Tutor</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Camera Screen
function CameraScreen({ theme }) {
  return (
    <View style={[styles.screen, { backgroundColor: theme.colors.bg }]}>
      <View style={[styles.placeholder, { backgroundColor: theme.colors.card }]}>
        <Text style={styles.placeholderText}>📷</Text>
        <Text style={[styles.placeholderTitle, { color: theme.colors.text }]}>Camera</Text>
        <Text style={[styles.placeholderDesc, { color: theme.colors.secondary }]}>Point camera at your notes to scan them</Text>
      </View>
    </View>
  );
}

// Upload Screen
function UploadScreen({ theme }) {
  return (
    <View style={[styles.screen, { backgroundColor: theme.colors.bg }]}>
      <View style={[styles.placeholder, { backgroundColor: theme.colors.card }]}>
        <Text style={styles.placeholderText}>📁</Text>
        <Text style={[styles.placeholderTitle, { color: theme.colors.text }]}>Upload Image</Text>
        <Text style={[styles.placeholderDesc, { color: theme.colors.secondary }]}>Select images from your gallery</Text>
      </View>
    </View>
  );
}

// Notes Screen
function NotesScreen({ theme }) {
  return (
    <View style={[styles.screen, { backgroundColor: theme.colors.bg }]}>
      <View style={[styles.placeholder, { backgroundColor: theme.colors.card }]}>
        <Text style={styles.placeholderText}>📝</Text>
        <Text style={[styles.placeholderTitle, { color: theme.colors.text }]}>My Notes</Text>
        <Text style={[styles.placeholderDesc, { color: theme.colors.secondary }]}>Your scanned notes appear here</Text>
      </View>
    </View>
  );
}

// Flashcards Screen
function FlashcardsScreen({ theme }) {
  return (
    <View style={[styles.screen, { backgroundColor: theme.colors.bg }]}>
      <View style={[styles.placeholder, { backgroundColor: theme.colors.card }]}>
        <Text style={styles.placeholderText}>🗂️</Text>
        <Text style={[styles.placeholderTitle, { color: theme.colors.text }]}>Flashcards</Text>
        <Text style={[styles.placeholderDesc, { color: theme.colors.secondary }]}>Study with interactive flashcards</Text>
      </View>
    </View>
  );
}

// AI Tutor Screen
function TutorScreen({ theme }) {
  const [text, setText] = useState('');
  const [level, setLevel] = useState('simple');
  const [explanation, setExplanation] = useState('');
  
  const handleExplain = () => {
    setExplanation(`Explanation (${level} mode): This is a placeholder. Connect to backend for real explanations.`);
  };
  
  return (
    <ScrollView style={[styles.screen, { backgroundColor: theme.colors.bg }]}>
      <Text style={[styles.tutorTitle, { color: theme.colors.text }]}>🎓 AI Tutor</Text>
      
      <View style={[styles.tutorCard, { backgroundColor: theme.colors.card }]}>
        <Text style={[styles.label, { color: theme.colors.text }]}>Enter text or concept:</Text>
        <View style={[styles.textInput, { backgroundColor: theme.colors.bg, borderColor: theme.colors.secondary }]}>
          <Text style={{ color: theme.colors.secondary }}>Enter text here...</Text>
        </View>
        
        <Text style={[styles.label, { color: theme.colors.text, marginTop: 15 }]}>Explanation Level:</Text>
        <View style={styles.levelButtons}>
          <TouchableOpacity 
            style={[styles.levelBtn, { backgroundColor: level === 'simple' ? theme.colors.primary : theme.colors.card }]}
            onPress={() => setLevel('simple')}
          >
            <Text style={[styles.levelBtnText, { color: level === 'simple' ? '#fff' : theme.colors.text }]}>Simple (Layman's Terms)</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.levelBtn, { backgroundColor: level === 'expanded' ? theme.colors.primary : theme.colors.card }]}
            onPress={() => setLevel('expanded')}
          >
            <Text style={[styles.levelBtnText, { color: level === 'expanded' ? '#fff' : theme.colors.text }]}>Expanded (Detailed)</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity 
          style={[styles.explainBtn, { backgroundColor: theme.colors.primary }]}
          onPress={handleExplain}
        >
          <Text style={styles.explainBtnText}>Get Explanation</Text>
        </TouchableOpacity>
        
        {explanation && (
          <View style={[styles.explanationBox, { backgroundColor: theme.colors.card }]}>
            <Text style={[styles.explanationTitle, { color: theme.colors.text }]}>📖 Explanation:</Text>
            <Text style={[styles.explanationText, { color: theme.colors.text }]}>{explanation}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

// Timetable Screen
function TimetableScreen({ theme }) {
  return (
    <View style={[styles.screen, { backgroundColor: theme.colors.bg }]}>
      <View style={[styles.placeholder, { backgroundColor: theme.colors.card }]}>
        <Text style={styles.placeholderText}>📅</Text>
        <Text style={[styles.placeholderTitle, { color: theme.colors.text }]}>Study Timetable</Text>
        <Text style={[styles.placeholderDesc, { color: theme.colors.secondary }]}>AI-generated study schedule</Text>
      </View>
    </View>
  );
}

// Settings Screen
function SettingsScreen({ theme }) {
  return (
    <ScrollView style={[styles.screen, { backgroundColor: theme.colors.bg }]}>
      <Text style={[styles.settingsTitle, { color: theme.colors.text }]}>⚙️ Settings</Text>
      
      <View style={[styles.settingsCard, { backgroundColor: theme.colors.card }]}>
        <View style={styles.settingItem}>
          <Text style={[styles.settingLabel, { color: theme.colors.text }]}>🌙 Dark Mode</Text>
          <TouchableOpacity 
            style={[styles.toggle, { backgroundColor: theme.isDark ? theme.colors.primary : theme.colors.secondary }]}
            onPress={() => theme.setIsDark(!theme.isDark)}
          >
            <View style={[styles.toggleDot, { transform: [{ translateX: theme.isDark ? 20 : 0 }] }]} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.settingItem}>
          <Text style={[styles.settingLabel, { color: theme.colors.text }]}>🔊 Text-to-Speech</Text>
          <TouchableOpacity 
            style={[styles.toggle, { backgroundColor: theme.ttsEnabled ? theme.colors.primary : theme.colors.secondary }]}
            onPress={() => theme.setTtsEnabled(!theme.ttsEnabled)}
          >
            <View style={[styles.toggleDot, { transform: [{ translateX: theme.ttsEnabled ? 20 : 0 }] }]} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.settingItem}>
          <Text style={[styles.settingLabel, { color: theme.colors.text }]}>📖 Text Direction</Text>
          <View style={styles.directionButtons}>
            <TouchableOpacity 
              style={[styles.dirBtn, { backgroundColor: theme.textDirection === 'ltr' ? theme.colors.primary : theme.colors.secondary }]}
              onPress={() => theme.setTextDirection('ltr')}
            >
              <Text style={{ color: '#fff', fontSize: 12 }}>LTR</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.dirBtn, { backgroundColor: theme.textDirection === 'rtl' ? theme.colors.primary : theme.colors.secondary }]}
              onPress={() => theme.setTextDirection('rtl')}
            >
              <Text style={{ color: '#fff', fontSize: 12 }}>RTL</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Main Tab Navigator
function MainNavigator({ theme }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon = 'home';
          if (route.name === 'Notes') icon = 'notes';
          else if (route.name === 'Flashcards') icon = 'collections';
          else if (route.name === 'Timetable') icon = 'schedule';
          else if (route.name === 'Settings') icon = 'settings';
          return <MaterialIcons name={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarStyle: { backgroundColor: theme.colors.card, borderTopColor: theme.colors.secondary },
        headerStyle: { backgroundColor: theme.colors.card },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { color: theme.colors.text }
      })}
    >
      <Tab.Screen 
        name="Home" 
        options={{ title: 'Study Plan' }}
        children={() => <MainScreen theme={theme} navigation={Stack} />}
      />
      <Tab.Screen 
        name="Notes" 
        options={{ title: 'My Notes' }}
        children={() => <NotesScreen theme={theme} />}
      />
      <Tab.Screen 
        name="Flashcards" 
        options={{ title: 'Flashcards' }}
        children={() => <FlashcardsScreen theme={theme} />}
      />
      <Tab.Screen 
        name="Timetable" 
        options={{ title: 'Study Plan' }}
        children={() => <TimetableScreen theme={theme} />}
      />
      <Tab.Screen 
        name="Settings" 
        options={{ title: 'Settings' }}
        children={() => <SettingsScreen theme={theme} />}
      />
    </Tab.Navigator>
  );
}

// Root Stack Navigator
function RootNavigator({ theme }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.card },
        headerTintColor: theme.colors.text,
        headerTitleStyle: { color: theme.colors.text },
        contentStyle: { backgroundColor: theme.colors.bg }
      }}
    >
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" children={() => <MainNavigator theme={theme} />} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Camera" options={{ title: 'Scan Notes' }} children={() => <CameraScreen theme={theme} />} />
        <Stack.Screen name="Upload" options={{ title: 'Upload Image' }} children={() => <UploadScreen theme={theme} />} />
        <Stack.Screen name="Tutor" options={{ title: 'AI Tutor' }} children={() => <TutorScreen theme={theme} />} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

// App Export
export default function App() {
  const theme = useTheme();
  
  return (
    <RootNavigator theme={theme} />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 32, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 24 },
  
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  menuCard: { width: '48%', aspectRatio: 1, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 16, padding: 12 },
  icon: { fontSize: 48, marginBottom: 8 },
  cardText: { fontSize: 14, fontWeight: '600', textAlign: 'center' },
  
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  placeholder: { width: '100%', padding: 30, borderRadius: 12, alignItems: 'center' },
  placeholderText: { fontSize: 60, marginBottom: 12 },
  placeholderTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  placeholderDesc: { fontSize: 14, textAlign: 'center' },
  
  tutorTitle: { fontSize: 28, fontWeight: 'bold', padding: 16, textAlign: 'center' },
  tutorCard: { padding: 16, borderRadius: 12, margin: 16 },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
  textInput: { borderWidth: 1, borderRadius: 8, padding: 12, minHeight: 80, marginBottom: 16 },
  levelButtons: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, gap: 8 },
  levelBtn: { flex: 1, padding: 10, borderRadius: 8, alignItems: 'center' },
  levelBtnText: { fontSize: 13, fontWeight: '600' },
  explainBtn: { padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 16 },
  explainBtnText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  explanationBox: { padding: 12, borderRadius: 8, marginTop: 16 },
  explanationTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  explanationText: { fontSize: 14, lineHeight: 20 },
  
  settingsTitle: { fontSize: 28, fontWeight: 'bold', padding: 16, textAlign: 'center' },
  settingsCard: { margin: 16, borderRadius: 12, padding: 16 },
  settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#333' },
  settingLabel: { fontSize: 16, fontWeight: '600' },
  toggle: { width: 50, height: 28, borderRadius: 14, justifyContent: 'center', paddingHorizontal: 2 },
  toggleDot: { width: 24, height: 24, borderRadius: 12, backgroundColor: '#fff' },
  directionButtons: { flexDirection: 'row', gap: 8 },
  dirBtn: { padding: 8, borderRadius: 6, minWidth: 50, alignItems: 'center' },
  
  settingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 }
});
