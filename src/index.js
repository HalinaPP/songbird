import React from 'react';
import ReactDOM from 'react-dom';

import "bootswatch/dist/slate/bootstrap.min.css"; 

import App from './components/app';
import transportData from './helpers/transport-quiz';

ReactDOM.render(<App transportData={transportData}/>,document.getElementById('root'))