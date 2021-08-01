import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from './store';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

axios.defaults.baseURL= process.env.REACT_APP_API || "http://localhost:3005";

ReactDOM.render(<React.StrictMode >
    <Provider store={store} >
        <BrowserRouter >
            <App />
        </BrowserRouter> 
        </Provider>
</React.StrictMode>,
    document.getElementById('root')
);


reportWebVitals();