import JAVA from '../src/assets/Java.png';
import PYTHON from '../src/assets/python.jpg';
import JAVASCRIPT from '../src/assets/javascript.png';

export default function Service() {
    return (
        <>
            <h2>My Skills</h2>

            {/* Java */}
            <div>
                <img src={JAVA} alt="Weather App" width="250" />
                <p>Java – OOP, data structures, backend development</p>
            </div>

            <hr />

            {/* Python */}
            <div>
                <img src={PYTHON} alt="Weather App" width="250" />
                <p>Python – Scripting, automation, data analysis</p>
            </div>

            <hr />

            {/* JavaScript */}
            <div>
                <img src={JAVASCRIPT} alt="Weather App" width="250" />
                <p>JavaScript – Web development, React, DOM manipulation</p>
            </div>
        </>
    );
}