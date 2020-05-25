import React from 'react';
import './App.css';
import logoSite from './img/logo.png';
import logoConnexion from './img/connexion.jpg';

class App extends React.Component {

  //const [merchants, setPays] = useState(false);
  // useEffect(() => {
  //   getPays();
  // }, []);

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
          var joined = this.state.list.concat(data[0].pays);
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
        {console.log("hffihzfhzfoihuzfhzo")}
        {console.log(window.location.hostname)}
        {console.log(window.location.protocol)}
        <h1>{this.state.list[0]} </h1>
        <header className="App-header">
          <a href='/'><img className="logo" src={logoSite} alt="H"></img></a>
          <img className="connexion" src={logoConnexion} alt="C"></img>
        </header>

        <h1> NOM DU SITE </h1>
        
        <div className="corps">
          <div className="Pays">
            <h2>Pays</h2>
          </div>

          <div className="Année">
            <h2>Année</h2>
          </div>
        </div>

      </div>
    );
  }
}

export default App;