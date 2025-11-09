#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function checkAndSetupEnvironment() {
  console.log('🔍 Checking environment...');
  
  // Check Android SDK
  const androidHome = process.env.ANDROID_HOME || path.join(process.env.HOME, 'Library/Android/sdk');
  if (!fs.existsSync(androidHome)) {
    console.error('❌ Android SDK not found. Please install Android Studio first.');
    console.error('   Download: https://developer.android.com/studio');
    process.exit(1);
  }
  
  // Check adb
  const adbPath = path.join(androidHome, 'platform-tools/adb');
  if (!fs.existsSync(adbPath)) {
    console.error('❌ ADB not found. Please install Android SDK platform-tools.');
    process.exit(1);
  }
  
  // Set environment variables for this process
  process.env.ANDROID_HOME = androidHome;
  process.env.PATH = `${path.join(androidHome, 'platform-tools')}:${process.env.PATH}`;
  process.env.EXPO_TV = '1';
  
  console.log('✅ Environment ready');
}

checkAndSetupEnvironment();
