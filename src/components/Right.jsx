import React from 'react';
import "./styles.css";

import Characters from "./Characters";
import DataFilm from "./DataFilm";

const Right = (props) => {
    const {data, films} = props;
    const {onX, onStar} = props.onClick;

    const initialValoration = data.initialValoration;

    let film;
    if(data.infoFilm != null){
        film = films.find(char => char.episode_id === data.infoFilm.id);
    }

    let stars = ["✴️", "✴️", "✴️", "✴️", "✴️"];

    if (initialValoration >= 0.5) {
        stars[0] = "⭐";
    }
    if(initialValoration >= 1.5) {
        stars[1] = "⭐";
    }
    if (initialValoration >= 2.5) {
        stars[2] = "⭐";
    }
    if (initialValoration >= 3.5) {
        stars[3] = "⭐";
    }
    if (initialValoration >= 4.5) {
        stars[4] = "⭐";
    }

    return (
        <div className="Right">
            <div className="X" onClick={() => onX(null)}>X</div>
            <DataFilm film={film}/>
            <div className="Stars2">
                <div className="Star1" onClick={() => onStar(1, film.episode_id)}>{stars[0]}</div>
                <div className="Star2" onClick={() => onStar(2, film.episode_id)}>{stars[1]}</div>
                <div className="Star3" onClick={() => onStar(3, film.episode_id)}>{stars[2]}</div>
                <div className="Star4" onClick={() => onStar(4, film.episode_id)}>{stars[3]}</div>
                <div className="Star5" onClick={() => onStar(5, film.episode_id)}>{stars[4]}</div>
                <div className="NumValorations">({data.numValorations[film.episode_id - 1]})</div>
            </div>
            {film.characters.map(obj => <Characters character={obj} key={obj.name}/>)}
        </div>
    )
}

export {Right as default};