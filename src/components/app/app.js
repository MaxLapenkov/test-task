import React from 'react';

import MainPage from '../pages/main-page';
import Header from '../header/';

import './app.scss'

const App = () => {

    return (
        <div className="app">
            <Header/>
            <MainPage />
        </div>
    )
}

export default App