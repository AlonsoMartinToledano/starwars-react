import React from 'react';
import "./styles.css";

const Film = (props) => {
    const {film} = props;
    const {onFilm} = props.onClick;

    const image = film.image;
    const title = film.title;
    const id = film.episode_id;

    return (
        <div className="Film" onClick={() => onFilm({id})}>
            <img className="Image" src={image} alt={title}/>
            <div className="Title">{title}</div>
            <div className="Episode">Episode: {id}</div>
        </div>
    )
}

export {Film as default};