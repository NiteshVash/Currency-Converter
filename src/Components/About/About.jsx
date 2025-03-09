import React from 'react';
import './About.css';

function Abut() {
    return (
        <div className="about-converter">
            <div className="inner-container">
            <h1>About the Currency Converter Project</h1>
        <p>
          The Currency Converter project is a web application designed to help users convert one currency to another in real-time. The main reason for developing this project was to provide a simple and efficient tool for travelers, business professionals, and anyone who needs to perform currency conversions quickly and accurately.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Real-time currency conversion using the latest exchange rates.</li>
          <li>User-friendly interface with easy-to-use input fields.</li>
          <li>Support for multiple currencies from around the world.</li>
          <li>Responsive design that works on both desktop and mobile devices.</li>
        </ul>
        <h2>API Used</h2>
        <p>
          This project utilizes the <a href="https://exchangeratesapi.io/" target="_blank" rel="noopener noreferrer">Exchange Rates API</a> to fetch the latest exchange rates. The API provides accurate and up-to-date information, ensuring that users get the most current conversion rates available.
        </p>
        <h2>Technologies Used</h2>
        <ul>
          <li>React: A JavaScript library for building user interfaces.</li>
          <li>React Router: For handling navigation and routing within the application.</li>
          <li>CSS: For styling the application and ensuring a responsive design.</li>
        </ul>
        <p>
          We hope you find this Currency Converter project useful and easy to use. If you have any feedback or suggestions, please feel free to contact us.
        </p>

            </div>
        </div>
    );
}

export default Abut;
