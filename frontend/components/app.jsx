import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
} from 'react-router-dom';
import Navbar from './navber'
import Main from './main'
import Footer from './footer'

const RoutedNavbar = withRouter(Navbar)

const App = () => (
    <div>
        <RoutedNavbar/>
        <Main/>
        <Footer/>
    </div>
);

export default App;