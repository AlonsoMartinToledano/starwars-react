import React, { Component } from 'react';
import './App.css';

import Films from "./assets/data";
import Body from "./components/Body";
import Right from "./components/Right";

class App extends Component {

  state = {
    films: [...Films],
    infoFilm: null,
    media: [0, 0, 0, 0, 0, 0, 0],
    numValorations: [0, 0, 0, 0, 0, 0, 0],
    initialValoration: 0
  }

  onFilmHandler = (infoFilm) => {
    this.setState({infoFilm});
    this.setState({initialValoration: 0})
  }

  onXHandler = (infoFilm) => {
    this.setState({infoFilm});
    this.setState({initialValoration: 0})
  }

  onStarHandler = (star, episode) => {
    const newMedia = this.state.media;
    const newNumValorations = this.state.numValorations;

    newMedia[episode - 1] = (newMedia[episode - 1] * newNumValorations[episode - 1] + star) / (newNumValorations[episode - 1] + 1);
    newNumValorations[episode - 1]++;
    this.setState({numValorations: newNumValorations});
    this.setState({media: newMedia});
    this.setState({initialValoration: star});
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
