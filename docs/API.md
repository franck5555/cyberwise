# API Documentation for CyberWise

## Overview

The CyberWise API provides endpoints for managing users, lessons, quizzes, and device security scans. It is built using Node.js and Express, and communicates with a database (Firestore or Postgres) to store and retrieve data.

## Base URL

All API endpoints are prefixed with `/api/v1`. The base URL for local development is:

```
http://localhost:5000/api/v1
```

## Authentication

### Sign Up

- **Endpoint:** `POST /auth/signup`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  - **201 Created:** User successfully registered.
  - **400 Bad Request:** Validation errors.

### Login

- **Endpoint:** `POST /auth/login`
- **Description:** Authenticate a user and return a session token.
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  - **200 OK:** Returns user data and token.
  - **401 Unauthorized:** Invalid credentials.

### Verify Email

- **Endpoint:** `GET /auth/verify`
- **Description:** Verify user email address.
- **Query Parameters:**
  - `token`: Verification token sent to the user's email.
- **Response:**
  - **200 OK:** Email verified successfully.
  - **400 Bad Request:** Invalid token.

### Forgot Password

- **Endpoint:** `POST /auth/forgot-password`
- **Description:** Send a password reset link to the user's email.
- **Request Body:**
  ```json
  {
    "email": "string"
  }
  ```
- **Response:**
  - **200 OK:** Reset link sent.
  - **404 Not Found:** Email not registered.

## Users

### Get User Profile

- **Endpoint:** `GET /users/me`
- **Description:** Retrieve the authenticated user's profile.
- **Headers:**
  - `Authorization: Bearer <token>`
- **Response:**
  - **200 OK:** Returns user profile data.

### Update User Profile

- **Endpoint:** `PUT /users/me`
- **Description:** Update the authenticated user's profile.
- **Request Body:**
  ```json
  {
    "name": "string",
    "email": "string"
  }
  ```
- **Response:**
  - **200 OK:** Profile updated successfully.
  - **400 Bad Request:** Validation errors.

## Lessons

### Get All Lessons

- **Endpoint:** `GET /lessons`
- **Description:** Retrieve a list of all lessons.
- **Response:**
  - **200 OK:** Returns an array of lesson objects.

### Get Lesson by ID

- **Endpoint:** `GET /lessons/:id`
- **Description:** Retrieve a specific lesson by ID.
- **Response:**
  - **200 OK:** Returns the lesson object.
  - **404 Not Found:** Lesson not found.

## Quizzes

### Get All Quizzes

- **Endpoint:** `GET /quiz`
- **Description:** Retrieve a list of all quizzes.
- **Response:**
  - **200 OK:** Returns an array of quiz objects.

### Submit Quiz Results

- **Endpoint:** `POST /quiz/results`
- **Description:** Submit the user's quiz results.
- **Request Body:**
  ```json
  {
    "quizId": "string",
    "score": "number",
    "answers": []
  }
  ```
- **Response:**
  - **201 Created:** Results submitted successfully.

## Scanner

### Get Scanner Checklist

- **Endpoint:** `GET /scanner/checklist`
- **Description:** Retrieve the vulnerability checklist for the user.
- **Response:**
  - **200 OK:** Returns the checklist items.

### Submit Scanner Results

- **Endpoint:** `POST /scanner/results`
- **Description:** Submit the results of the security scan.
- **Request Body:**
  ```json
  {
    "findings": [],
    "recommendations": []
  }
  ```
- **Response:**
  - **201 Created:** Results submitted successfully.

## Notifications

### Get Notification Preferences

- **Endpoint:** `GET /notifications/preferences`
- **Description:** Retrieve the user's notification preferences.
- **Response:**
  - **200 OK:** Returns notification preferences.

### Update Notification Preferences

- **Endpoint:** `PUT /notifications/preferences`
- **Description:** Update the user's notification preferences.
- **Request Body:**
  ```json
  {
    "dailyReminders": "boolean",
    "securityTips": "boolean",
    "weeklyChallenges": "boolean",
    "newLessons": "boolean"
  }
  ```
- **Response:**
  - **200 OK:** Preferences updated successfully.

## Error Handling

All endpoints will return appropriate HTTP status codes and error messages for invalid requests. Ensure to handle errors gracefully in the client application.

## Conclusion

This API documentation provides a comprehensive overview of the endpoints available for the CyberWise mobile app. For further details, please refer to the codebase or contact the development team.