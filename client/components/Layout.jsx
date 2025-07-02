import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';
export default function Layout() {
    return (
        <>
            <h1>My Portfolio</h1>
            <img src={logo} alt="My Logo" width="100" />
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> |
                <Link to="/service">Service</Link>| <Link
                    to="/project">Project</Link>| <Link to="/contact">Contact</Link>
            </nav>
            <hr />
        </>
    );
}