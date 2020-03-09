import React, { Component } from 'react';
import './App.css';

import Films from "./assets/data";
import Body from "./components/Body";
import Right from "./components/Right";

class App extends Component {

  state = {
    films: [...Films],
    infoFilm: null
  }

  onFilmHandler = (infoFilm) => {
    this.setState({infoFilm});
  }

  onXHandler = (infoFilm) => {
    this.setState({infoFilm});
  }

  render() {
    let content;

    if(this.state.infoFilm === null){
      content = <Body data={this.state} onClick={{onFilm: this.onFilmHandler}}/>
    } else {
      content =
        <div className="NewBody">
          <Body data={this.state} onClick={{onFilm: this.onFilmHandler}}/>
          <Right data={this.state} onClick={{onX: this.onXHandler}}/>
        </div>
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
