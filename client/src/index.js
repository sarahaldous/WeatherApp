import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import UserProvider from './context/UserProvider.js'
import CoordinatesProvider from './context/CoordinatesProvider.js'
import LocationProvider from './context/LocationProvider.js'
import './style.css'

ReactDOM.render(
        <BrowserRouter>
            <UserProvider>
                <CoordinatesProvider>
                    <LocationProvider>
                        <App />
                    </LocationProvider>
                </CoordinatesProvider>
            </UserProvider>
        </BrowserRouter>, 
document.getElementById('root'))