import React from 'react';
import "./styles.css";

const DataFilm = (props) => {
    const {film} = props;

    return (
        <div className="DataFilm">
            <img className="Picture" src={film.image} alt={film.title}/>
            <div className="Data">
                <div><div className="Bold">Title: </div>{film.title}</div>
                <div><div className="Bold">Episode: </div>{film.episode_id}</div>
                <div><div className="Bold">Director: </div>{film.director}</div>
                <div><div className="Bold">Release: </div>{film.release_date}</div>
                <div><div className="Bold">Beginning: </div>{film.opening_crawl}</div>
            </div>
        </div>
    )
}

export {DataFilm as default};