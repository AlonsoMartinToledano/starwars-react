import React from 'react';
import "./styles.css";

import Characters from "./Characters";
import DataFilm from "./DataFilm";

const Right = (props) => {
    const {data} = props;
    const {onX, onStar} = props.onClick;

    const films = data.films;
    const media = data.media;

    let stars = ["✴️", "✴️", "✴️", "✴️", "✴️"];

    if (media >= 0.5) {
        stars[0] = "⭐";
    }
    if(media >= 1.5) {
        stars[1] = "⭐";
    }
    if (media >= 2.5) {
        stars[2] = "⭐";
    }
    if (media >= 3.5) {
        stars[3] = "⭐";
    }
    if (media >= 4.5) {
        stars[4] = "⭐";
    }

    let film;
    if(data.infoFilm != null){
        film = films.find(char => char.episode_id === data.infoFilm.id);
    }

    return (
        <div className="Right">
            <div className="X" onClick={() => onX(null)}>X</div>
            <DataFilm film={film}/>
            <div className="Stars2">
                <div className="Star1" onClick={() => onStar(1)}>{stars[0]}</div>
                <div className="Star2" onClick={() => onStar(2)}>{stars[1]}</div>
                <div className="Star3" onClick={() => onStar(3)}>{stars[2]}</div>
                <div className="Star4" onClick={() => onStar(4)}>{stars[3]}</div>
                <div className="Star5" onClick={() => onStar(5)}>{stars[4]}</div>
                <div className="NumValorations">({data.numValorations})</div>
            </div>
            {film.characters.map(obj => <Characters character={obj} key={obj.name}/>)}
        </div>
    )
}

export {Right as default};