import React, {Component} from "react";
import "./App.css";
import LandingPage from "./landing-page/LandingPage";
import SearchPage from "./search-page/SearchPage";
import {Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <main>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/search" component={SearchPage}/>
            </main>
        );
    }
}

// import { Route, Link } from 'react-router-dom'
// import Home from './home'
// import About from './about'

// const App = () => (
//     <div>
//         <header>
//             <Link to="/">Home</Link>
//             <Link to="/about-us">About</Link>
//         </header>
//
//         <main>
//             <Route exact path="/" component={Home} />
//             <Route exact path="/about-us" component={About} />
//         </main>
//     </div>
// );

export default App