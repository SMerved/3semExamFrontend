import React from 'react'
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import App from "./App.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter basename="3semExamFrontend">
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)
