# React Native Multi-TV App Sample

[![React Native](https://img.shields.io/badge/React%20Native-v0.74.2-blue.svg)](https://reactnative.dev/)
[![License: MIT-0](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/AmazonAppDev/react-native-multi-tv-app-sample/blob/main/LICENSE)

Build TV apps that run everywhere. One codebase for Android TV, Apple TV, Fire TV, and web.

![Demo GIF](./tvdemo.gif)

## Quick Start

```bash
git clone https://github.com/AmazonAppDev/react-native-multi-tv-app-sample.git && cd react-native-multi-tv-app-sample && yarn setup && yarn dev:android
```

That's it. The app builds and launches on your Android TV emulator.

## Prerequisites

You need Android Studio with an Android TV emulator running. Don't have one? 

1. Download [Android Studio](https://developer.android.com/studio)
2. Tools → AVD Manager → Create Virtual Device → **TV** → **"Television 1080p"** → **API 34 (Android 14)**
3. Start the emulator before running commands

**Important**: Use "Television 1080p" with API 34. Other TV emulators may not work correctly.

## Commands

```bash
yarn setup        # Check environment, install dependencies
yarn dev:android  # Run on Android TV
yarn dev:ios      # Run on Apple TV (macOS + Xcode required)
yarn dev:web      # Run in browser
```

## What You Get

This sample shows you how to build real TV apps. It includes video playback, remote control navigation, and a content catalog that works across all TV platforms.

The code is organized as a monorepo with shared components. The `expo-multi-tv` app handles Android TV, Apple TV, and web. The `vega` app is optimized for Fire TV.

## Key Features

**Navigation**: Spatial navigation that works with TV remotes and keyboards. Focus management that actually makes sense.

**Video Player**: Custom controls with seek bars, play/pause, and remote control integration. Different implementations per platform because that's what works.

**Content Loading**: Fetches movie data from a JSON API. Easy to swap out with your own content source.

**Shared UI**: Components in `packages/shared-ui` work across all platforms. Platform-specific code uses `.android.ts`, `.ios.ts`, `.kepler.ts` extensions.

## Project Structure

```
apps/
├── expo-multi-tv/    # Universal app (Android TV, Apple TV, web)
└── vega/             # Fire TV optimized version

packages/
└── shared-ui/        # Components, screens, navigation
```

## Development

Want to add features? Put shared components in `packages/shared-ui/src/`. Platform-specific implementations get the right file extension. Export from `packages/shared-ui/src/index.ts` and import via `@multi-tv/shared-ui`.

The build system handles the rest.

## Troubleshooting

**"Module not found" errors**: Run `yarn clean:all && yarn install`

**Video won't play**: Check your network. Video URLs need to be accessible and CORS-enabled for web.

**Navigation not working**: Use arrow keys on web. TV remotes work automatically on actual TV platforms.

**Build fails**: Make sure Android SDK is installed and emulator is running.

## Tech Stack

React Native (tvOS fork), Expo SDK 51, TypeScript, Yarn workspaces, React Navigation, react-tv-space-navigation, react-native-video.

## License

MIT-0. Use it however you want.

---

Questions? Open an issue.
