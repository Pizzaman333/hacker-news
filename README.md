# Hacker News Search App

A React-based web application for searching Hacker News articles using the Algolia Hacker News API. Features a search bar, article list with pagination, and a "Load More" button, styled with a vibrant, cyberpunk-inspired aesthetic.

## Features
- **Searchbar**: Search for articles with a neon-styled input and animated button.
- **ArticleList**: Displays articles in a responsive list with glowing hover effects.
- **Load More**: Fetches additional articles with a dynamic, rotating button.
- **Loader**: Shows a glowing spinner during API requests.

## Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Install `axios` (`npm install axios`) and `react-loader-spinner` (`npm install react-loader-spinner`), and `sass` (`npm install sass`).
4. No API key is required for the Hacker News API.
5. Run `npm start` to launch the app.

## Project Structure
- `src/App.js`: Main component managing state and API calls.
- `src/components/`: Contains React class components (`Searchbar`, `ArticleList`, `Button`, `Loader`).
- `src/services/api.js`: Handles API requests using axios.
- `src/styles/`: SCSS files with cyberpunk styling, neon colors, and glowing animations.
- `src/index.js`: Entry point for React rendering.
- `index.html`: HTML template with CDN links for React, axios, and Babel.

## Technologies
- **React**: Class-based components with lifecycle methods.
- **SCSS**: For vibrant, cyberpunk-inspired styling with neon gradients and hover effects.
- **Hacker News API**: For article search and retrieval via Algolia.
- **axios**: For handling HTTP requests.
- **react-loader-spinner**: For glowing loading animation.

## Usage
- Enter a search term (e.g., "react") in the search bar and submit.
- Browse articles in the list; click a title to visit the article in a new tab.
- Use the "Load More" button to fetch additional articles.