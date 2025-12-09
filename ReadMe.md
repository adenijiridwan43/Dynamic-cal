# 🧮 Clone of Dynamic Samsung Calculator - Complete Expo Setup Guide

## 📋 Prerequisites
- Node.js 18+ installed
- Expo CLI installed globally
- iOS Simulator (Mac) or Android Emulator setup

---

## 🚀 Step-by-Step Installation

### 1. Create New Expo Project

```bash
# Create new Expo app with TypeScript
npx create-expo-app@latest AdvancedCalculator --template blank-typescript

cd AdvancedCalculator
```

### 2. Install Core Dependencies

```bash
# Install Zustand for state management (compatible with React 18/19)
npm install zustand@4.5.0

# Install React Native Vector Icons (Expo compatible)
npx expo install @expo/vector-icons

# Install React Native Reanimated for animations
npx expo install react-native-reanimated

# Install React Native Gesture Handler
npx expo install react-native-gesture-handler

# Install Expo Haptics for feedback
npx expo install expo-haptics

# Install Expo Clipboard
npx expo install expo-clipboard
```

### 3. Install NativeWind (Tailwind for React Native)

```bash
# Install NativeWind v4 (compatible with Expo SDK 51+)
npm install nativewind@^4.0.1
npm install --save-dev tailwindcss@3.3.2

# Initialize Tailwind Config
npx tailwindcss init
```

### 4. Configure Tailwind CSS

Create/Update `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
