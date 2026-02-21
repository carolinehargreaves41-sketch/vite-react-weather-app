# 🌤️ Vite React Weather App

A clean, responsive weather app built with React and Vite. Search any city in the world to get current weather conditions and a 5-day forecast, with easy switching between Celsius and Fahrenheit.

**🔗 [Live Demo](https://stately-raindrop-ae08fb.netlify.app/)**

---

## Project Overview

This project was created as part of the SheCodes React course to learn the fundamentals of the React framework and take my code to the next level. The app focuses on implementing a mobile-first approach to responsive web design.

---

## Screenshot

<img width="325" height="364" alt="image" src="https://github.com/user-attachments/assets/177d3ee1-c655-4fb4-ade1-76e5f754c10a" />

---

## Learning Objectives

- Master mobile-first responsive design principles
- Create accessible, semantic HTML5 structure
- Implement CSS Grid and Flexbox for modern layouts
- Optimise for multiple screen sizes and devices
- Achieve high Lighthouse performance scores
- Follow web accessibility (WCAG) guidelines

---

## Technologies Used

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI components and state management |
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| SheCodes Weather API | Weather and forecast data |
| [Netlify](https://www.netlify.com/) | Hosting and deployment |
| HTML5 | Semantic markup with ARIA attributes |
| CSS3 | Modern CSS with card component system, hover effects, responsive layouts and animations |

### Performance decision during development

This app was originally built with **Bootstrap** (utility classes and layout helpers) and **Axios** (promise-based HTTP client). Both packages were later removed after Lighthouse flagged performance issues on desktop, including Cumulative Layout Shift (CLS), unused CSS and JS, and render-blocking CSS.

- Replaced Bootstrap components with plain HTML/CSS
- Replaced Axios with the native Fetch API

---

## Features

- **City search** — look up current weather for any city worldwide
- **Current conditions** — displays temperature, feels-like temperature, humidity, wind speed, and a weather icon
- **5-day forecast** — daily high/low temperatures, humidity, wind speed, and condition icons
- **°C / °F toggle** — switch between Celsius and Fahrenheit at any time; wind speed updates automatically between m/s and mph
- **Loading states** — animated spinner while data is being fetched
- **Error handling** — clear, dismissible messages for invalid city names or network issues
- **Responsive design** — works on mobile, tablet, and desktop
- **Accessible** — keyboard-navigable, screen-reader-friendly labels and ARIA attributes throughout

---

## Lighthouse Scores

### Desktop

| Category | Score |
|---|---|
| Performance | 💚 100 / 100 |
| Accessibility | 💚 100 / 100 |
| Best Practices | 💚 100 / 100 |
| SEO | 💚 100 / 100 |

### Mobile

| Category | Score |
|---|---|
| Performance | 🟡 94 / 100 |
| Accessibility | 💚 100 / 100 |
| Best Practices | 💚 100 / 100 |
| SEO | 💚 100 / 100 |

---

## Project Structure

```
src/
├── components/
│   ├── SearchBar.jsx             # City search input and submit button
│   ├── WeatherDisplay.jsx        # Current weather card
│   ├── ForecastList.jsx          # 5-day forecast section
│   ├── ForecastDay.jsx           # Individual forecast day card
│   └── TemperatureConverter.jsx  # °C / °F toggle
├── services/
│   └── WeatherApi.js             # API calls for current weather and forecast
├── utils/
│   └── helpers.js                # Utility functions (unit conversion, date formatting, etc.)
├── App.jsx                       # Root component, state management
├── App.css                       # App-level styles
├── main.jsx                      # Entry point
└── index.css                     # Global styles
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- A Weather API key (free options are available)


### Installation

1. **Clone the repository**

```bash
git clone https://github.com/carolinehargreaves41-sketch/vite-react-weather-app.git
cd vite-react-weather-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up your API key**

Create a `.env` file in the root of the project and add your Weather API key:

```
VITE_SHECODES_API_KEY=your_api_key_here (VITE_WEATHER_API_KEY)
```

> ⚠️ Never commit your `.env` file — it is already included in `.gitignore`.

4. **Start the development server**

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

---

## Deployment

This app is deployed on [Netlify](https://www.netlify.com/). To deploy your own version:

1. Push the project to GitHub
2. Connect the repository to Netlify
3. Add `VITE_WEATHER_API_KEY` as an environment variable in your Netlify site settings
4. Set the build command to `npm run build` and the publish directory to `dist`

---

## Key Learning Takeaways

### 1. Mobile-First is More Intuitive
Starting with mobile constraints forces you to prioritise content and functionality. Adding complexity for larger screens is easier than stripping it away.

### 2. CSS Grid Solves Real Problems
The `grid-template-columns` pattern elegantly solves card alignment issues that previously required JavaScript hacks or complex Flexbox workarounds.

### 3. Semantic HTML Improves Everything
Proper structure (`<header>`, `<main>`, `<section>`, `<footer>`) contributed to better SEO rankings, screen reader navigation, code maintainability, and browser reader mode support.

### 4. Accessibility is Non-Negotiable
Features like ARIA labels cost minimal effort but make the site usable for everyone. It's not optional — it's professional responsibility.

---

## Acknowledgements

- **[SheCodes](https://www.shecodes.io/)** — For the comprehensive React Web Design course. SheCodes delivers online coding workshops for women. The SheCodes Weather API is only available to students. 
- **Matt Delac** — Founder of SheCodes and excellent instructor
- **[Netlify](https://www.netlify.com/)** — For seamless deployment and hosting
- **[Lighthouse](https://developer.chrome.com/docs/lighthouse/)** — For performance auditing and optimisation guidance
- **[MDN Web Docs](https://developer.mozilla.org/)** — For excellent HTML/CSS reference documentation

---

## Author

**Caroline Hargreaves** — Aspiring Web Developer | SheCodes Student

This project is open-sourced on [GitHub](https://github.com/carolinehargreaves41-sketch/vite-react-weather-app) and hosted on [Netlify](https://stately-raindrop-ae08fb.netlify.app/).

---

## License

This project is open source and available under the MIT License.

**Usage terms:**
- ✅ Use for learning and education
- ✅ Fork and modify for your own projects
- ✅ Use as a portfolio piece (with credit)
- ❌ Do not claim as your own work
- ❌ Do not use commercially without permission

---

_Project Status: Completed · Version 1.0.0 · Last Updated: February 2026_

_Built with 💜 and lots of 🫖 in England_
