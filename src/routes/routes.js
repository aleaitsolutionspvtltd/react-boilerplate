import React from "react";
import Home from "../pages/Home";
import Tables from "../pages/Tables";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";

const AppRoute = () => {
    return (
        <>

            {/* System Routes Start*/}
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<Home />} />
                <Route path="/tables" element={<Tables />} />
                <Route path="/profile" element={<Profile />} />

                {/* Auth Routes */}
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
            {/* System Routes End*/}

        </>
    )
}

export default AppRoute;
