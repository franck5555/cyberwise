# CyberWise App Setup Instructions

## Prerequisites
Before setting up the CyberWise app, ensure you have the following installed on your machine:

- Node.js (v18.x or higher)
- npm or yarn
- For iOS development: Xcode (macOS only)
- For Android development: Android Studio and SDK

## Frontend Setup
1. Navigate to the frontend folder:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
   Alternatively, you can use Expo:
   ```
   expo start
   ```
4. To run the app on a device or emulator:
   - For Android:
     ```
     npm run android
     ```
   - For iOS:
     ```
     npm run ios
     ```

## Backend Setup
1. Navigate to the backend folder:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on the `.env.example` provided, and configure your environment variables.
4. Start the server:
   ```
   npm start
   ```

## Directory Structure
The project is organized as follows:

```
cyber-wise-app
├── frontend          # React Native mobile application
│   ├── src           # Source files for the app
│   ├── app.json      # Expo configuration
│   ├── package.json   # Frontend dependencies and scripts
│   └── README.md     # Frontend documentation
├── backend           # Node.js/Express API server
│   ├── src           # Source files for the backend
│   ├── package.json   # Backend dependencies and scripts
│   └── README.md     # Backend documentation
└── docs              # Documentation files
```

## Additional Notes
- Ensure to follow the coding standards and practices outlined in the project documentation.
- For any issues during setup, refer to the README files in both the frontend and backend directories for troubleshooting tips.