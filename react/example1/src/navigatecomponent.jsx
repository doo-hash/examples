import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignupComponent from './signupcomponent';
import LoginComponent from './logincomponent';
import WelcomeComponent from './welcomecomponent';

export default class NavigateComponent extends React.Component{
    signup(){
        return (<LoginComponent />);
    }
    render(){
        return (
            <Router>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                     <a class="navbar-brand" href="#">Navbar</a>
                       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                       </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                             <li class="nav-item active">
                                <Link to = "/" class = "nav-link">Home <span class="sr-only">(current)</span></Link>
                             </li>
                             <li class="nav-item">
                                <Link  to = "/login" class = "nav-link">Login</Link>
                             </li>

                             <li class="nav-item">
                                <Link to = "/signup" class = "nav-link">Signup</Link>
                             </li>

                             
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <Switch>
                    <Route path = "/login">
                        <LoginComponent />
                    </Route>
                    <Route path = "/signup">
                        <SignupComponent />
                    </Route>
                    <Route path = "/">
                        <WelcomeComponent />
                    </Route>
                </Switch>
            </div>
            </Router>
        );
    }
}