import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
} from 'react-router-dom';
import Navbar from './navbar_container';
import Main from './main';
import Footer from './footer';

const App = () => (
    <div>
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
);

export default App;