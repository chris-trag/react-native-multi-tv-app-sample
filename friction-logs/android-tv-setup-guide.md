# Android TV Setup Guide

## Prerequisites
- Android SDK installed at `/Users/trag/Library/Android/sdk/`
- Android TV emulator running (Television_1080p)
- Node.js and Yarn installed

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
