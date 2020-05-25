import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from "./App";
import Pays from "./Pays";


class Menu extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path='/' component={App}/>
                    <Route path='/pays' component={Pays}/>
                </Switch>
            </BrowserRouter>

        )
    }

}

export default Menu;