# Setup Improvements Needed

## Current Issues

### 1. Missing Environment Setup in README
The README doesn't mention the critical `EXPO_TV=1` environment variable needed for TV builds.

### 2. Android SDK Path Not Documented
No mention of setting `ANDROID_HOME` or adding platform-tools to PATH.

### 3. Quick Start Commands Don't Work
The documented commands in README don't include the TV environment variable:
- `yarn dev:android` should be `EXPO_TV=1 yarn dev:android`

## Recommended Changes

### 1. Update package.json Scripts
```json
{
  "scripts": {
    "dev:android": "EXPO_TV=1 yarn workspace @multi-tv/expo-multi-tv android",
    "dev:ios": "EXPO_TV=1 yarn workspace @multi-tv/expo-multi-tv ios",
    "dev:web": "yarn workspace @multi-tv/expo-multi-tv web",
    "dev": "EXPO_TV=1 yarn workspace @multi-tv/expo-multi-tv start"
  }
}
```

### 2. Add Setup Script
Create `scripts/setup.sh`:
```bash
#!/bin/bash
echo "Setting up React Native Multi-TV environment..."

# Check for Android SDK
if [ ! -d "$HOME/Library/Android/sdk" ]; then
  echo "❌ Android SDK not found. Please install Android Studio first."
  exit 1
fi

# Add to shell profile
echo 'export ANDROID_HOME="$HOME/Library/Android/sdk"' >> ~/.zshrc
echo 'export PATH="$ANDROID_HOME/platform-tools:$PATH"' >> ~/.zshrc

echo "✅ Environment setup complete. Restart your terminal."
```

### 3. Update README Prerequisites Section
Add explicit environment setup:

```markdown
### Environment Setup

1. **Android SDK Setup**:
   ```bash
   export ANDROID_HOME="$HOME/Library/Android/sdk"
   export PATH="$ANDROID_HOME/platform-tools:$PATH"
   ```

2. **TV Environment Variable**:
   All TV-related commands require `EXPO_TV=1`
```

### 4. Add .env File Support
Create `.env` in project root:
```
EXPO_TV=1
ANDROID_HOME=/Users/trag/Library/Android/sdk
```

### 5. Improve Error Messages
Add validation in package.json scripts to check for required environment variables before running.

## Priority Order
1. Fix package.json scripts (immediate)
2. Update README with environment setup (high)
3. Add setup script (medium)
4. Add .env support (low)
