import React from 'react';
import "./styles.css";

import Characters from "./Characters";
import DataFilm from "./DataFilm";

const Right = (props) => {
    const {data} = props;
    const {onX} = props.onClick;
    const films = data.films;

    let film;
    if(data.infoFilm != null){
        film = films.find(char => char.episode_id === data.infoFilm.id);
    }

    return (
        <div className="Right">
            <div className="X" onClick={() => onX(null)}>X</div>
            <DataFilm film={film}/>
            {film.characters.map(obj => <Characters character={obj} key={obj.name}/>)}
        </div>
    )
}

export {Right as default};