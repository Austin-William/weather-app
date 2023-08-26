import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

import './styles/App.scss';

function App() {
    return (
        <div className="App">
            <BrowserRouter basename="WhatIsTheWeatherLikeToday">
                <Home />
            </BrowserRouter>
        </div>
    );
}

export default App;
