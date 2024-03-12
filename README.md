# Gantavya - Landmark Identification App

This application allows users to identify landmarks by uploading a photo. The backend predicts the landmark in the photo and displays detailed results to the user.

_Note: This is the frontend repository for the Landmark Identification App. The backend repository with setup instructions can be found [here](https://github.com/Gantavya-app/gantavya-backend)._

_The application is currently is not yet ready for production use._

## Features

- **Upload and Identify**: Users can upload a photo from their gallery. The photo is processed in the backend to predict the landmark present in the image.

- **Detailed Results**: The results page displays the landmark name, photos, location, details, facts, and more.

- **Save Landmarks**: Users have the option to save landmarks for future reference.

- **Saved Landmarks**: Users can view a list of their saved landmarks.

- **Text to Speech**: This feature helps users learn about the landmark through audio narration.

- **Share Landmark**: Users can share the landmark with others through various social media platforms.

- **Explore Landmarks**: Users can explore a list of landmarks and view detailed information about each landmark.

- **Google Maps Integration**: The explore page displays landmarks on an integrated Google map.

- **User Account Management**: Users can create and login to their account, edit their profile, change their password, delete their account, and manage their login status.

- **Prediction History**: Users can view a list of landmarks that they have previously predicted.

- **About Us**: This section introduces the creators of the application.

## Video Demo

<video controls src="./project/demo/Gantavya.mp4" title="Gantavya Demo"></video>

## Tech Stack

This project uses the following key technologies:

- [React Native](https://reactnative.dev/): A JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.
- [Expo](https://expo.dev/): A framework and a platform for universal React applications.
- [React Navigation](https://reactnavigation.org/): Routing and navigation for your React Native apps.
- [Axios](https://axios-http.com/): Promise based HTTP client for the browser and node.js.
- [React Native Maps](https://github.com/react-native-maps/react-native-maps): A tool that provides custom maps for React Native.
- [React Native SVG](https://github.com/react-native-svg/react-native-svg): SVG library for React Native, React Native Web, and plain React web projects.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm: You can download Node.js from [here](https://nodejs.org/en/download/). npm is included with Node.js.
- Expo CLI: Install it by running `npm install -g expo-cli` in your terminal.
- Expo Go: This is the Expo client app for Android and iOS, which will allow you to open your app on your device. You can download it from the [App Store](https://apps.apple.com/app/apple-store/id982107779) or [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www).
- Android Studio (optional): If you want to use an emulator on your PC for testing, you can download Android Studio from [here](https://developer.android.com/studio).

### Installation

1. Clone the repo: `git clone https://github.com/Gantavya-app/gantavya-frontend.git`
2. Navigate into the project directory: `cd gantavya-frontend`
3. Install the dependencies: `npm install` or `yarn install`
4. Edit the 'env.js' file in the root directory and add the following environment variables:

   ```javascript
   API_URL = "<backend_url>"
   ```

   <!-- 4. Create a `.env` file in the root directory and add the following environment variables: -->

   <!-- ```env
   REACT_APP_BACKEND_URL=<backend_url>
   REACT_APP_GOOGLE_MAPS_API_KEY=<google_maps_api_key>
   ``` -->

   Replace `<backend_url>` with the URL of the backend server.
   <!-- Replace `<google_maps_api_key>` with your Google Maps API key. -->

   Note: The backend server should be running before starting the frontend server. You can find the backend repository [here](https://github.com/Gantavya-app/gantavya-backend).

5. Start the development server: `npm start` or `yarn start`

This will start the development server. You can now run the app on your physical device by scanning the QR code with the Expo Go app, or on an emulator by pressing `a` for Android or `i` for iOS in the terminal.

For more detailed instructions, please refer to the [Expo documentation](https://docs.expo.dev/).

## Contributing

We welcome contributions to this project. If you're interested in contributing, you can do so in the following ways:

- **Issue Reporting**: If you find a bug or want to suggest a new feature, please report it in the issue tracker.
- **Submitting Pull Requests**: If you've fixed a bug or developed a new feature, we would love to include it in our project. Please submit a pull request with your changes.

Before contributing, please make sure to read and follow our code of conduct.

## License

This project is open source under the MIT license. This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, under the following conditions:

- You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- You may not use the material for commercial purposes.
- If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

## Authors

- [Sandesh G.C.](https://www.linkedin.com/in/sandesh-g-c-8236b2195/) (Frontend Development)

## Acknowledgements

- Logo made by [Indra Prasad Paneru](https://www.linkedin.com/in/indra-paneru-a773b0170/)
- Backend Development by [Rupesh Ghimire](https://www.linkedin.com/in/rupesh-ghimire7/)
- Data Collection, Data Annotation, and Model Training by [Samir Gurung](https://www.linkedin.com/in/samir-gurung-8461a5266/) and [Subek Sharma](https://www.linkedin.com/in/subek-sharma/)
