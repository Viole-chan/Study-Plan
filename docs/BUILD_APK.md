# Building APK for Android

This guide will help you build a release APK (Android Package) from the Study Plan mobile app.

## Prerequisites

1. **Node.js** (v16+)
2. **npm** or **yarn**
3. **Expo CLI** (`npm install -g expo-cli`)
4. **EAS CLI** (Expo Application Services) - for building APK
5. **Expo Account** - Create free account at https://expo.dev

## Step-by-Step Guide

### 1. Install EAS CLI

```bash
npm install -g eas-cli
```

### 2. Login to Expo Account

```bash
eas login
```

Or if you don't have an account:
```bash
eas register
```

### 3. Configure Your Project

Navigate to the frontend directory and create EAS config:

```bash
cd frontend
eas build:configure
```

This creates `eas.json` file. You'll be prompted to select:
- Platform: Android
- Build type: APK (for development/testing)

### 4. (Optional) Generate Keystore for Production

For a production APK, you should use a keystore. Create one with:

```bash
keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

Then update `eas.json` with keystore info.

### 5. Build the APK

For **development/preview APK**:
```bash
eas build --platform android --local
```

For **production APK** (recommended for app store):
```bash
eas build --platform android
```

The `--local` flag builds on your machine. Without it, EAS builds on their servers (recommended for production).

### 6. Wait for Build to Complete

The build process takes 5-15 minutes. You'll see:
- Build starting
- Build progress
- Build completion

Once complete, you'll get a download link for your APK.

### 7. Download APK

Click the download link or find it in your EAS dashboard at https://expo.dev

## Alternative: Local Build

If you want to build locally on your machine:

### Prerequisites for Local Build
- Android Studio or Android SDK
- Java Development Kit (JDK) 11+
- Gradle

### Build Locally

```bash
cd frontend
eas build --platform android --local
```

## Testing the APK

### On Physical Android Device

1. Transfer APK to your phone
2. Enable "Unknown Sources" in Settings > Security
3. Tap APK file to install
4. Grant permissions as needed
5. Launch the app

### On Android Emulator

```bash
# With Android emulator running
adb install path/to/study-plan.apk
```

Or use Android Studio Emulator UI to install.

## Troubleshooting

### Build Fails with "No development account"
- Create free Expo account at https://expo.dev
- Run `eas login` again

### Build Fails with "Java not found"
```bash
# macOS
brew install java

# Linux
sudo apt-get install openjdk-11-jdk

# Windows
# Download from https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
```

### APK Installation Fails on Device
- Device storage might be full - free up space
- Device Android version incompatible - check `frontend/app.json` minSdkVersion
- Try installing from Settings > Apps > Install Unknown Apps

### App Crashes on Launch
- Check logs with: `adb logcat`
- Ensure backend server is running (if testing with real backend)
- Update `.env` file with correct API endpoints

## Production Build

For production release:

1. **Create Keystore** (one-time):
```bash
keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

2. **Update `eas.json`**:
```json
{
  "build": {
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

3. **Build with Production Config**:
```bash
eas build --platform android --profile production
```

4. **Sign and Release** (via Google Play Store or manual distribution)

## Size Optimization

To reduce APK size:

### Update `app.json`:
```json
{
  "expo": {
    "plugins": [
      ["expo-build-properties", {
        "android": {
          "enableShrinkResourcesInReleaseBuilds": true
        }
      }]
    ]
  }
}
```

### Use `expo-build-properties` Plugin:
```bash
expo install expo-build-properties
```

## Publishing to Google Play Store

1. Create Google Play Developer Account ($25 one-time fee)
2. Generate signed APK
3. Create new app in Play Console
4. Upload APK
5. Add app details and screenshots
6. Submit for review

## Useful Commands

```bash
# View build status
eas build:list

# Cancel build
eas build:cancel <build-id>

# View build logs
eas build:view <build-id>

# Clean build cache
eas build:cache:remove

# Update Expo SDK
expo upgrade
```

## Next Steps

- Test APK thoroughly on multiple devices
- Gather beta feedback
- Prepare for Play Store release
- Monitor crash reports via Sentry or Firebase

## Support

For issues:
- Check [Expo Documentation](https://docs.expo.dev/eas-update/getting-started/)
- Visit [Expo Forum](https://forums.expo.dev)
- Create issue on [GitHub](https://github.com/Viole-chan/Study-Plan/issues)
