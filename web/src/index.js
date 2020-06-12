import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import HomePage from './components/home-page';

ReactDOM.render((
    <BrowserRouter>
        <HomePage />
    </BrowserRouter>
), document.getElementById('root'));