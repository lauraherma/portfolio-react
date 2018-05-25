import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {onError} from "mobx-react"
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<App/>, document.getElementById('root'));
onError(error => {
    console.log(error)
});