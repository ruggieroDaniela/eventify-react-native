# Eventify - React Native

## Description

Eventify is a mobile platform designed for event management and user interaction. It includes essential functionalities such as event administration, user connection, and social features like followers, notifications, and comments.

## Demo

[![Eventify Demo](/eventifyThumbnail.png)](https://youtu.be/ly95HEZUPlY)

*Click on the image to watch the demo on YouTube*

## Technologies Used

- **React Native**: Main framework for mobile application development.
- **Expo**: Platform to simplify React Native application development.
- **TypeScript**: Programming language that adds static typing to JavaScript.
- **Supabase**: Backend-as-a-service (BaaS) platform for authentication, database, and storage.
- **React Navigation**: Library for screen navigation.
- **react-i18next**: Internationalization solution.
- **Jest & Testing Library**: Tools for unit and integration testing.

## Project Structure

```
reactNative-app/
├── src/
│   ├── components/      # Reusable components
│   ├── contexts/        # React Contexts
│   │   └── AuthContext.tsx        # Authentication Context
│   │   └── PushNotifications.tsx  # Push Notifications Context
│   ├── hooks/           # Custom hooks
│   │   └── useAudioRecoder.tsx     # Hook for handling audio
│   │   └── useCurrentLocation.tsx  # Hook for geolocation
│   │   └── useImagePicker.tsx      # Hook for camera and gallery
│   │   └── useMusicPicker.tsx      # Hook for music
│   ├── lib/             # Libraries and configurations
│   │   └── supabase.ts  # Supabase configuration
│   ├── navigators/      # Navigation configuration
│   │   └── AppNavigator.tsx       # Main application navigator
│   │   └── AuthNavigator.tsx      # Navigator for authentication flow
│   │   └── TabNavigator.tsx       # Tab navigator
│   ├── services/        # Services
│   │   └── storage.ts   # Storage Service
│   ├── models/          # Models
│   ├── views/           # Screens (views)
│   ├── controllers/     # Controllers
├── i18n/               # Internationalization configuration and files
├── __tests__/          # Application tests
├── App.tsx             # Application entry point
├── package.json        # Dependencies and scripts
└── jest.setup.js       # Jest configuration for tests
```

## Prerequisites

- Node.js (v23 or higher)
- npm or yarn
- Expo CLI
- Supabase account

## Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/valeraruggierotesisucv/reactNative-app.git
   cd reactNative-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   - Create a `.env` file in the project root
   - Add the following variables:
     ```
     SUPABASE_URL=your_supabase_url
     SUPABASE_ANON_KEY=your_supabase_anon_key
     
     ```

## Running the Application

### Development

To start the application in development mode:

```bash
npm start
# or
yarn start
```

This will start the Expo development server. You can run the application on:
- Physical device: Scan the QR code with the Expo Go app
- Emulator: Press 'a' for Android or 'i' for iOS

### Tests

To run the tests:

```bash
npm test
```

To run specific tests:

```bash
npm test -- --testNamePattern="test_name"
```

## Deployment

### APK Generation

To generate installation files:

```bash
expo build:android  # For Android (APK)
```

