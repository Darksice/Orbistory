import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from "./App";
import Pays from "./Pays";
import Annee from "./Annee";
import PaysArticle from "./PaysArticle";


class Menu extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path='/' component={App}/>
                    <Route exact path='/pays' component={Pays}/>
                    <Route exact path='/annee' component={Annee}/>
                    <Route exact path="/pays/:id" component={PaysArticle}/>
                </Switch>
            </BrowserRouter>

        )
    }

}

export default Menu;