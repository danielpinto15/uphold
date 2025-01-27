# Currency Exchange Rate Viewer

A React-based application that displays exchange rates for various currencies based on user input. The project adheres to specific requirements, making use of the Uphold JavaScript SDK and other modern web development practices.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How It Works](#how-it-works)
- [Challenges Addressed](#challenges-addressed)
- [Future Improvements](#future-improvements)

## Features
- Input amount defaults to USD.
- Supports switching between at least 10 different currencies.
- Dynamically updates currency values using a debounce mechanism.
- Caches all values on the first API request.
- Background API calls keep cached values updated when switching currencies.

## Technologies Used
- **Frontend Framework**: [React](https://reactjs.org/)
- **Project Bundler**: [Vite](https://vitejs.dev/)
- **Language**: JavaScript
- **API SDK**: [Uphold JavaScript SDK](https://github.com/uphold/uphold-sdk-javascript)
- Optional: Linting tools, Uphold Design System, Unit and End-to-End tests.

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/danielpinto15/uphold
   cd uphold
   
2. **Install dependencies:**
   ```bash
   npm install
   
3. **Run the development server:**
   ```bash
   npm run dev

## How It Works
  1. **The app initializes the Uphold SDK with the provided credentials and base URL:**
   ```bash
   import SDK from '@uphold/uphold-sdk-javascript';

  const sdk = new SDK({
    baseUrl: 'http://api-sandbox.uphold.com',
    clientId: 'foo',
    clientSecret: 'bar',
   });
```

2. **On the first request, exchange rates are fetched and cached for all supported currencies**
3. **The user can switch between currencies and input values. The UI updates dynamically with debounced API calls.**
4. **A background process ensures cached values stay up-to-date.**

## Challenges Addressed
- **Performance Optimization**: A debounce mechanism minimizes unnecessary API calls during user interactions.

## Future Improvements
- Add comprehensive unit and end-to-end tests.
- Implement error handling for API failures.
- Expand functionality to include more features, like historical exchange rates.
