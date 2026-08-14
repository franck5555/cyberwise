# CyberWise Mobile App

Welcome to the CyberWise mobile app! This application is designed to teach cybersecurity fundamentals to beginners through interactive lessons, a device security scanner, and a gamified quiz system. Our goal is to make cybersecurity accessible and engaging for users of all ages.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Features](#features)
- [Screens](#screens)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

CyberWise is a cross-platform mobile application built with React Native. It provides users with a friendly and approachable way to learn about cybersecurity through various interactive features.

## Getting Started

To get started with the CyberWise app, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/cyber-wise-app.git
   ```

2. Navigate to the frontend directory:
   ```
   cd cyber-wise-app/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Run the app on your device or emulator:
   ```
   npm run android  # For Android
   npm run ios      # For iOS
   ```

## Features

- **Interactive Lessons:** Learn about various cybersecurity topics through engaging modules.
- **Vulnerability Scanner:** A self-reported checklist to help users assess their device security.
- **Gamified Quiz System:** Test your knowledge with quizzes and earn rewards.
- **User Progress Tracking:** Monitor your learning journey and achievements.

## Screens

The app consists of the following main screens:

- **Home Screen:** The landing page with a welcome message and navigation options.
- **Learn Screen:** Presents interactive lessons on cybersecurity topics.
- **Scanner Screen:** Provides a self-reported vulnerability checklist.
- **Quiz Screen:** Allows users to take quizzes on cybersecurity topics.
- **Progress Screen:** Displays the user's learning progress and achievements.
- **Profile Screen:** Manages account settings and profile information.

## Technologies Used

- **Frontend:** React Native (Expo)
- **State Management:** Zustand / Redux Toolkit
- **Backend:** Firebase (Auth + Firestore) or Supabase (Postgres + Auth)
- **Push Notifications:** Firebase Cloud Messaging
- **Local Secure Storage:** Expo SecureStore

## Contributing

We welcome contributions to the CyberWise app! Please read our [CONTRIBUTING.md](../docs/CONTRIBUTING.md) for guidelines on how to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.