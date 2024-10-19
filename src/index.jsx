/**
 * Renders the main React application component to the DOM.
 *
 * This code is the entry point for the React application. It imports the necessary dependencies, sets up some global variables, and renders the `App` component to the DOM element with the ID `root`.
 *
 * The global variables `$primaryLanguage`, `$secondaryLanguage`, `$primaryLanguageIconId`, and `$secondaryLanguageIconId` are used to configure the language settings for the application.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Set global variables for language settings
window.$primaryLanguage = 'en'; // Primary language set to English
window.$secondaryLanguage = 'bg'; // Secondary language set to Bulgarian
window.$primaryLanguageIconId = 'primary-lang-icon'; // ID for primary language icon
window.$secondaryLanguageIconId = 'secondary-lang-icon'; // ID for secondary language icon

// Render the main App component to the DOM element with the ID 'root'
ReactDOM.render(<App />, document.getElementById('root'));
