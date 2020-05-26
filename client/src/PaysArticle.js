import React from 'react';
import './App.css';
import logoSite from './img/logo.png';
import logoConnexion from './img/connexion.jpg';

class PaysArticle extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = { 
        list: [],
        tailleList:0
    };
  }

  componentDidMount(){
    this.getPaysArticle();
 }

 getPaysArticle() {
    fetch(`/api/pays/${this.props.match.params.id}`)
      .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log("a une taille de ");
            console.log(data.length);
            let joined = [...this.state.list];
            for(let i=0;i<data.length;i++)
            {
                joined = joined.concat(data[i].nom);
                console.log("joined");
                console.log(joined);
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

        <h1> {this.props.match.params.id} </h1>
        <div className="corps">
              {this.state.list.map( nom => (
                  <li key={nom}> <a href={`/article/${nom}`}>{nom}</a> </li>
              ))
                }
        </div>

      </div>
    );
  }
}

export default PaysArticle;