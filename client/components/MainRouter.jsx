import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './about'
import Contact from './Contact'
import Education from './Education'
import Project from './project'
import Layout from './Layout'
import Users from '../user/Users'
import Signup from '../user/Signup'
import Signin from '../lib/Signin'
import PrivateRoute from '../lib/PrivateRoute'
import EditProfile from '../user/EditProfile'
import Profile from '../user/Profile'
import Signout from '../lib/SignOut'
const MainRouter = () => {
    return (<div>
        <Layout />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route
                path="/signout"
                element={
                    <PrivateRoute>
                        <Signout />
                    </PrivateRoute>
                }
            />

            <Route
                path="/user/edit/:userId"
                element={
                    <PrivateRoute>
                        <EditProfile />
                    </PrivateRoute>
                }
            />
            <Route path="/user/:userId" element={<Profile />} />
        </Routes>
    </div>
    )
}
export default MainRouter