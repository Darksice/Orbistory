import React from 'react';
import './App.css';
import logoSite from './img/logo.png';
import logoConnexion from './img/connexion.jpg';
import {Link, useParams} from 'react-router-dom';

class PaysArticle extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = { 
      
    };
  }

  componentWillMount(){
    this.getPaysArticle();
 }

 getPaysArticle() {
    fetch(`https://orbistory.herokuapp.com/api/pays/${this.props.match.params.id}`)
      .then(response => response.json())
        .then(data => {
            let joined = [...this.state.list];
            for(let i=0;i<data.length;i++)
            {
                joined = joined.concat(data[i].pays);
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
        
        {/* <div className="corps">
              {this.state.list.map( pays => (
                  <li key={pays}> <Link className="LinkPaysLi" to={`/pays/${pays}`}>{pays}</Link> </li>
              ))
                }
        </div> */}

      </div>
    );
  }
}

export default PaysArticle;