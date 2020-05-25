import React from 'react';
import './App.css';
import logoSite from './img/logo.png';
import logoConnexion from './img/connexion.jpg';
import {Link} from 'react-router-dom';

class Annee extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = { 
      list: [],
      tailleList:0
    };
  }

  componentWillMount(){
    this.getAnnee();
 }

  getAnnee() {
    fetch('https://orbistory.herokuapp.com/api/annee')
      .then(response => response.json())
        .then(data => {
            let joined = [...this.state.list];
            for(let i=0;i<data.length;i++)
            {
                joined = joined.concat(data[i].annee);
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
        <header className="App-header">
          <a href='/'><img className="logo" src={logoSite} alt="H"></img></a>
          <img className="connexion" src={logoConnexion} alt="C"></img>
        </header>

        <h1> NOM DU SITE </h1>
        
        <div className="corps">
              {this.state.list.map( annee => (
                  <li key={annee}> {annee} </li>
              ))
                }
        </div>

      </div>
    );
  }
}

export default Annee;