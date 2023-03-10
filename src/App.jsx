import React, {useRef, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Header from "./components/Header.jsx";
import User from "./pages/User.jsx";
import Admin from "./pages/Admin.jsx";
import Owners from "./pages/Owners.jsx";
import Boats from "./pages/Boats.jsx";


function App(props) {

    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [roles, setRoles] = useState([])

    const obj = {
        name: "TestName",
        street: "TestStreet",
        town: "TestTown",
        country: "TestCountry",
    }

    return (
        <>
            <Header username={username} setUsername={setUsername} setLoggedIn={setLoggedIn} loggedIn={loggedIn} roles={roles} setRoles={setRoles}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="owners" element={<Owners/>}/>
                <Route path="boats" element={<Boats/>}/>
                <Route path="user" element={<User/>}/>
                <Route path="admin" element={<Admin/>}/>
                <Route path="*" element={<h1>Page Not Found !!!!</h1>}/>
            </Routes>
        </>
    );
}

export default App;
