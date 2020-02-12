import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Navbar from './navber'
import Main from './main'
import Footer from './footer'

const App = () => (
    <div>
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
);

export default App;