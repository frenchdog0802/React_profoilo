import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './about'
import Contact from './contact'
import Service from './service'
import Project from './project'
import Layout from './Layout'
const MainRouter = () => {
    return (<div>
        <Layout />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
        </Routes>
    </div>
    )
}
export default MainRouter