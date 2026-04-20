# CountryPeek

A React application for searching and exploring country data, built with the RestCountries API. This project demonstrates skills in React hooks, Context API, state management with `useReducer`, and responsive web design.

## Live Demo
[https://sagar-git.github.io/country-peek/](https://sagar-git.github.io/country-peek/)

## Features
- **Live Search**: Find countries by name with debounced API requests.
- **Filtering & Sorting**: Filter by region and sort by alphabetical order or population.
- **Favourites**: Save countries to a personal list that persists via `localStorage`.
- **Responsive Design**: Optimized for mobile and desktop screens.
- **Accessibility**: ARIA-labeled interactive elements and keyboard-navigable interface.
- **Theme Support**: Persistent light/dark mode.

## Tech Stack
- **Frontend**: React 18, Vite
- **Routing**: React Router v6
- **State Management**: Context API + `useReducer`
- **Data Source**: [RestCountries API](https://restcountries.com/)
- **Deployment**: GitHub Pages

## Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/sagar-git/country-peek.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## License
MIT
