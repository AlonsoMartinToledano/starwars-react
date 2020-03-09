import React from 'react';
import "./styles.css";

const Characters = (props) => {
    const {character} = props;

    return (
        <div className="Characters">
            <img className="CharImg" src={character.image} alt={character.name}/>
            <div className="CharInfo">
                <div className="Info"><div className="Bold">Name: </div>{character.name}</div>
                <div className="Info"><div className="Bold">Actor: </div>{character.actor}</div>
            </div>
        </div>
    )
}

export {Characters as default};