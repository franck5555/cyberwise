# CyberWise Mobile App

Welcome to the CyberWise mobile app! This application is designed to teach cybersecurity fundamentals to beginners through interactive lessons, a device security scanner, and a gamified quiz system. Our goal is to make cybersecurity accessible and engaging for users of all ages.

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

CyberWise is a cross-platform mobile application built using React Native. It provides users with a friendly and approachable interface to learn about cybersecurity topics, assess their device security, and test their knowledge through quizzes.

## Tech Stack

- **Frontend:** React Native (Expo)
- **State Management:** Zustand / Redux Toolkit
- **Backend:** Firebase (Auth + Firestore) or Supabase (Postgres + Auth)
- **Push Notifications:** Firebase Cloud Messaging
- **Local Secure Storage:** Expo SecureStore
- **Analytics:** Firebase Analytics (optional)

## Features

- **Interactive Lessons:** Beginner-friendly modules covering various cybersecurity topics.
- **Vulnerability Scanner:** A self-reported checklist to assess device security.
- **Gamified Quiz System:** Multiple-choice quizzes with instant feedback and rewards.
- **Real-World Simulations:** Interactive examples of phishing and other security threats.
- **User Progress Tracking:** Monitor learning progress and achievements.
- **Daily Cyber Tips:** Short, practical tips to enhance user security awareness.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd cyber-wise-app
   ```

2. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

3. Navigate to the backend directory and install dependencies:
   ```
   cd ../backend
   npm install
   ```

4. Create a `.env` file in the backend directory with your configuration settings.

5. Start the backend server:
   ```
   npm start
   ```

6. Start the frontend development server:
   ```
   cd ../frontend
   npm start
   ```

## Usage

Once the servers are running, you can access the app on your mobile device or emulator. Follow the on-screen instructions to navigate through the lessons, quizzes, and security scanner.

## Contributing

We welcome contributions to the CyberWise project! Please read our [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines on how to contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.