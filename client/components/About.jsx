import React from 'react';
import headshot from '../src/assets/headshot.png'; // Replace with your actual image path

export default function About() {
    return (
        <div>
            <h2 >About Me</h2>

            {/* Headshot */}
            <img
                src={headshot} style={{ width: '150px', height: '200px' }}
            />

            {/* Legal Name */}
            <h3 >Chung Pao Hsiao</h3>

            {/* Paragraph */}
            <p >
                Hello there! I'm Chung Pao Hsiao, a passionate software developer with a keen interest in creating innovative solutions. I have a strong background in web development and enjoy working on projects that challenge my skills and creativity. In my free time, I love exploring new technologies and contributing to open-source projects. Let's connect and collaborate on exciting ventures!
            </p>

            <a href="../src/assets/dummy.pdf" target="_blank" rel="noopener noreferrer">
                Download My Resume (PDF)
            </a>
        </div>
    );
}