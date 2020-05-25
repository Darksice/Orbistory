import React from 'react';
import './App.css';
import logoSite from './img/logo.png';
import logoConnexion from './img/connexion.jpg';
import {Link} from 'react-router-dom';


class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = { 
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <a href='/'><img className="logo" src={logoSite} alt="H"></img></a>
          <img className="connexion" src={logoConnexion} alt="C"></img>
        </header>

        <h1> NOM DU SITE </h1>
        {console.log("test")}
        <div className="corps">
          <div className="Pays">
            <Link className="LinkPays" to="/pays">Pays</Link>
          </div>

          <div className="Année">
          <Link className="LinkAnnee" to="/annee">Annee</Link>
          </div>
        </div>

      </div>
    );
  }
}

export default App;