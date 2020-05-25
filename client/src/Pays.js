import React from 'react';
import './App.css';
import logoSite from './img/logo.png';
import logoConnexion from './img/connexion.jpg';
import {Link} from 'react-router-dom';

class Pays extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = { 
      list: [],
      tailleList:0
    };
  }

  getPays() {
    fetch('https://orbistory.herokuapp.com/api/pays')
      .then(response => response.json())
        .then(data => {
            let joined;
            for(let i=0;i<data.length;i++)
            {
                joined = this.state.list.concat(data[i].pays);
                console.log(data[i].pays);
            }    
          this.setState({
              list: joined,
              tailleList: data.length
            })
        })
    }

  render(){
    return (
      <div className="App">
        
        {this.getPays()}
        {console.log(this.state.list.length)}
        <h1>{this.state.list[0]} </h1>
        <header className="App-header">
          <a href='/'><img className="logo" src={logoSite} alt="H"></img></a>
          <img className="connexion" src={logoConnexion} alt="C"></img>
        </header>

        <h1> NOM DU SITE </h1>
        
        <div className="corps">
          <div className="Pays">
          <Link className="LinkPays" to={'/pays'}>Pays</Link>
          </div>

          <div className="Année">
            <h2>Année</h2>
          </div>
        </div>

      </div>
    );
  }
}

export default Pays;