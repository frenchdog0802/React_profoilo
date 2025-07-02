import React from 'react';
import project1 from '../src/assets/project1.jpg';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.jpg';

export default function Project() {
    return (
        <>
            <h2>My Projects</h2>

            <div>
                {/* Project 1 */}
                <h3>Weather App</h3>
                <img src={project1} alt="Weather App" width="250" />
                <p>
                    I built a weather forecast application using React and OpenWeatherMap API. My role was to handle the front-end design and connect with the API. The result was a responsive app that displays real-time weather by city or location.
                </p>
            </div>

            <hr />

            <div>
                {/* Project 2 */}
                <h3>Portfolio Website</h3>
                <img src={project2} alt="Portfolio Website" width="250" />
                <p>
                    This personal portfolio was developed using only React. I created all components manually and structured the site to include navigation, project showcases, and a contact form. It helped me present my work to future employers.
                </p>
            </div>

            <hr />

            <div>
                {/* Project 3 */}
                <h3>To-Do Task Manager</h3>
                <img src={project3} alt="To-Do App" width="250" />
                <p>
                    I created a simple to-do app that allows users to add and remove tasks. I was responsible for the logic and local storage implementation. The result is a lightweight productivity tool I use daily to stay organized.
                </p>
            </div>
        </>
    );
}