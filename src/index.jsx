import React from 'react';
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';
import {BrowserRouter} from "react-router-dom";
import Router from "./router.jsx";
import MuiThemeProvider from '@material-ui/styles/ThemeProvider/';
// import MuiThemeProvider from 'material-ui/styles/ThemeProvider/';

import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';


const container = document.getElementById('app');


ReactDom.render(
    <BrowserRouter>
        <MuiThemeProvider>
            <Router/>
        </MuiThemeProvider>
    </BrowserRouter>,
    container
)