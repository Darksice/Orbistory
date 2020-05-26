import React, {Component} from "react";
import Article from './article/Truc3';

class DashboardWrapper extends Component {

  constructor(props)
  {
    super(props);
    this.state = { 
      Name: this.props.match.params.id
    };
  }

    whichFile(){
      // if(this.state.name === "Truc")
      // {
      //   return <Truc/>
      // }
      // if(this.state.name === "Truc3")
      // {
      //   return <Truc3/>
      // }
    }


    importAll(r) {
      return r.keys().map(r);
    }
    render (){
      const images = this.importAll(require.context('./article', false, /\.js$/));
      console.log(images);
      console.log(images[3].default.name);
      const Name = "Truc";
      return (
        <Name />
      )
    }
  
  }

  export default DashboardWrapper;