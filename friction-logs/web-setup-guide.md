# React Native Multi-TV App Sample - Web Setup Guide

## Overview
This guide documents the steps to get the React Native Multi-TV App Sample running on the web platform.

## Prerequisites
- Node.js v18 or higher
- Yarn v4.5.0 (configured via packageManager field)
- Modern web browser

## Setup Steps

### 1. Install Dependencies
```bash
yarn install
```
**Note**: You may see some peer dependency warnings, but these don't affect functionality.

### 2. Start Web Development Server
```bash
yarn dev:web
```

**Alternative method** (if port conflicts occur):
```bash
cd apps/expo-multi-tv
npx expo start --web --port 8083
```

### 3. Access the Application
Open your browser and navigate to:
- Default: `http://localhost:8082`
- Alternative: `http://localhost:8083` (if port 8082 is in use)

## Project Structure
- **Monorepo**: Uses Yarn workspaces
- **Main app**: `apps/expo-multi-tv`
- **Shared components**: `packages/shared-ui`
- **Web script**: Configured in `apps/expo-multi-tv/package.json`

## Configuration Details

### Web Script Configuration
```json
{
  "scripts": {
    "web": "expo start --web --port 8082",
    "dev:web": "expo start --web --port 8082"
  }
}
```

### App Configuration
- **Framework**: Expo SDK 51 with react-native-tvos
- **TV Support**: Configured via `@react-native-tvos/config-tv` plugin
- **Navigation**: React Navigation with spatial navigation support
- **Video**: react-native-video with web compatibility

## Troubleshooting

### Port Conflicts
If you see "Port 8082 is running this app in another window":
1. Kill existing processes: `pkill -f "expo start"`
2. Use alternative port: `npx expo start --web --port 8083`

### Watchman Warnings
If you see watchman recrawl warnings, run:
```bash
watchman watch-del '/path/to/project'
watchman watch-project '/path/to/project'
```

## Success Indicators
- Metro bundler starts successfully
- Web server responds on the configured port
- App loads with "MultiTVSample" title
- No critical errors in browser console

## Notes
- The project works out-of-the-box after `yarn install`
- No additional configuration needed for web platform
- TV-specific features gracefully degrade on web
- Spatial navigation works with keyboard arrows on web

## Time to Success
- Fresh setup: ~2-3 minutes (including dependency installation)
- Subsequent runs: ~30 seconds
