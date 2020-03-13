import React from 'react';
import "./styles.css";

const Film = (props) => {
    const {data, film} = props;
    const {onFilm} = props.onClick;

    const image = film.image;
    const title = film.title;
    const id = film.episode_id;
    const media = data.media;

    let stars = ["✴️", "✴️", "✴️", "✴️", "✴️"];

    if (media[id - 1] >= 0.5) {
        stars[0] = "⭐";
    }
    if(media[id - 1] >= 1.5) {
        stars[1] = "⭐";
    }
    if (media[id - 1] >= 2.5) {
        stars[2] = "⭐";
    }
    if (media[id - 1] >= 3.5) {
        stars[3] = "⭐";
    }
    if (media[id - 1] >= 4.5) {
        stars[4] = "⭐";
    }

    return (
        <div className="Film" onClick={() => onFilm({id})}>
            <img className="Image" src={image} alt={title}/>
            <div className="Title">{title}</div>
            <div className="Episode">Episode: {id}</div>
            <div className="Stars1">
                {stars}
            </div>
        </div>
    )
}

export {Film as default};