import React, { Component } from 'react';
import './App.css';

import Films from "./assets/data";
import Body from "./components/Body";
import Right from "./components/Right";

class App extends Component {

  state = {
    films: [...Films],
    infoFilm: null,
    media: 0,
    numValorations: 0
  }

  onFilmHandler = (infoFilm) => {
    this.setState({infoFilm});
  }

  onXHandler = (infoFilm) => {
    this.setState({infoFilm});
  }

  onStarHandler = (star) => {
    const newMedia = (this.state.media * this.state.numValorations + star) / (this.state.numValorations + 1);
    this.setState({numValorations: this.state.numValorations + 1});
    this.setState({media: newMedia});
  }

  render() {
    let content;

    if(this.state.infoFilm === null){
      content = <Body data={this.state} onClick={{onFilm: this.onFilmHandler}}/>
    } else {
      content =
        <div className="NewBody">
          <Body data={this.state} onClick={{onFilm: this.onFilmHandler}}/>
          <Right data={this.state} onClick={{onX: this.onXHandler, onStar: this.onStarHandler}}/>
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
