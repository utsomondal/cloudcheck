# Cloud Check - Weather App
---
## Project Overview

**Cloud Check** is a responsive weather app that displays real-time weather information for the user's current location and any city they search for. The app uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface with dynamic weather icons and descriptions.

## Features

- Displays the current weather for the user's location based on geolocation.
- Allows users to search for the weather in any city by entering its name.
- Displays weather details such as temperature, humidity, wind speed, and weather description.
- Custom weather icons based on current weather conditions (e.g., sunny, cloudy, rainy, etc.).
- Shows loading spinners while fetching data for a seamless user experience.
- Error handling for location or API issues, providing helpful messages.
- Fully responsive and works well on mobile and desktop screens.

## Technologies Used

- **HTML5**: Structure of the web app.
- **CSS3**: Styling and layout, including flexbox and media queries for responsiveness.
- **JavaScript (ES6)**: Functionality and API calls.
- **OpenWeatherMap API**: To fetch weather data.
- **Github Pages**: For deployment.

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/username/weather-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd weather-app
   ```

3. **Open the project** in your favorite code editor (e.g., VSCode).

4. **Create an OpenWeatherMap account**:

   - Go to [OpenWeatherMap](https://openweathermap.org/) and sign up.
   - Once registered, navigate to the API section and generate an API key.

5. **Add the API key**:

   - Open the `script.js` file and replace the following line with your own API key:
   
   ```js
   const apiKey = 'YOUR_API_KEY_HERE';
   ```

6. **Run the project locally**:

   You can open the `index.html` file in any browser to run the weather app locally.

## Usage

- Upon loading the page, the app will automatically retrieve and display the weather for your current location.
- To search for the weather in another city:
  - Type the city's name into the input field.
  - Click the "Get Weather" button.
  - The weather for the searched city will be displayed.

## Screenshots

![Screenshot 1](images/screenshot1.png)
![Screenshot 2](images/screenshot2.png)

## Future Improvements

- Add the ability to save favorite cities.
- Display a 5-day weather forecast.
- Improve the error handling with detailed messages.
- Add more weather information like sunrise/sunset times and pressure.
