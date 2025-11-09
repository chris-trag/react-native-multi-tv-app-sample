# Android TV Setup Guide

## Prerequisites
- Android SDK installed at `/Users/trag/Library/Android/sdk/`
- **Android TV emulator running: "Television 1080p" with API 34 (Android 14)**
- Node.js and Yarn installed

## Android TV Emulator Setup
1. Open Android Studio
2. Tools → AVD Manager → Create Virtual Device
3. Select **TV** category (not Phone or Tablet)
4. Choose **"Television 1080p"** (1920 x 1080, 320 dpi)
5. Select **API 34 (Android 14)** system image
6. Click Finish and start the emulator

**Note**: Other TV emulators like "Android TV (1080p)" may cause issues. Use exactly "Television 1080p".

## Steps to Deploy

### 1. Set Environment Variables
```bash
export PATH="/Users/trag/Library/Android/sdk/platform-tools:$PATH"
export ANDROID_HOME="/Users/trag/Library/Android/sdk"
```

### 2. Navigate to Expo TV App
```bash
cd /Users/trag/Documents/GitHub/react-native-multi-tv-app-sample/apps/expo-multi-tv
```

### 3. Build and Deploy to Android TV
```bash
EXPO_TV=1 yarn android
```

### 4. Start Metro Bundler (if needed)
```bash
EXPO_TV=1 yarn start
```

### 5. Launch App on Emulator
```bash
adb shell am start -n com.anonymous.MultiTVSample/com.anonymous.MultiTVSample.MainActivity
```

## Verification
- Check installed packages: `adb shell pm list packages | grep -i multi`
- App package name: `com.anonymous.MultiTVSample`

## Key Points
- Use `EXPO_TV=1` environment variable for all TV-related commands
- The app uses react-native-tvos instead of regular react-native
- Navigation works with TV remote/keyboard arrows
- Hot reload works automatically with Metro bundler running
