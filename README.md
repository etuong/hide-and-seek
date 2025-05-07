# React Firebase App

This project is a simple React application that allows users to choose a team and upload their pictures to Firebase Storage.

## Features

- Team selection from a predefined list.
- Image upload functionality to Firebase Storage.

## Technologies Used

- React
- TypeScript
- Firebase

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 5.6 or higher)
- Firebase account

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/react-firebase-app.git
   ```

2. Navigate to the project directory:

   ```
   cd react-firebase-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Set up Firebase:

   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firebase Storage in your project.
   - Obtain your Firebase configuration object and update the `src/firebase/config.ts` file.

### Running the Application

To start the development server, run:

```
npm start
```

The application will be available at `http://localhost:3000`.

### Usage

1. Select a team from the dropdown menu.
2. Upload your picture using the provided interface.
3. The uploaded image will be stored in Firebase Storage.

## License

This project is licensed under the MIT License.