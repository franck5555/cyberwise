# CyberWise Backend

## Overview
The CyberWise backend is built using Node.js and Express.js, providing a RESTful API to support the CyberWise mobile application. This API handles user authentication, lesson management, quiz functionalities, and device security scanning.

## Project Structure
- **src/**: Contains the source code for the backend application.
  - **controllers/**: Contains the logic for handling requests and responses.
  - **routes/**: Defines the API endpoints and their corresponding controllers.
  - **middleware/**: Contains middleware functions for authentication and error handling.
  - **models/**: Defines the data models for users, lessons, quizzes, and scanners.
  - **types/**: TypeScript types used throughout the application.
  - **config/**: Configuration files for Firebase and database connections.
  - **app.ts**: Main application file that sets up the Express server and middleware.
  - **server.ts**: Entry point for starting the backend server.

## Setup Instructions

### Prerequisites
- Node.js (v18.x or higher)
- npm or yarn

### Installation
1. Navigate to the backend folder:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file based on the `.env.example` file for configuration.

### Running the Server
To start the server, run:
```
npm start
```

### API Endpoints
- **Authentication**
  - `POST /api/v1/auth/signup`: Register a new user.
  - `POST /api/v1/auth/login`: Log in an existing user.
  - `POST /api/v1/auth/verify`: Verify user email.
  - `POST /api/v1/auth/forgot-password`: Request a password reset.

- **Users**
  - `GET /api/v1/users/:id`: Get user details.
  - `PUT /api/v1/users/:id`: Update user information.

- **Lessons**
  - `GET /api/v1/lessons`: Retrieve all lessons.
  - `GET /api/v1/lessons/:id`: Get details of a specific lesson.

- **Quizzes**
  - `GET /api/v1/quiz`: Retrieve quiz questions.
  - `POST /api/v1/quiz/results`: Submit quiz results.

- **Scanner**
  - `POST /api/v1/scanner`: Submit scanner results.

## Security
- All API calls should be made over HTTPS.
- Passwords are hashed and stored securely using the authentication provider.

## Testing
To run tests, use:
```
npm test
```

## Contributing
Please refer to the [CONTRIBUTING.md](../docs/CONTRIBUTING.md) file for guidelines on contributing to the project.

## License
This project is licensed under the MIT License. See the LICENSE file for details.