import React from 'react';
import "./styles.css";

import Film from "./Film";

const Body = (props) => {
    const {data, onClick} = props;
    const films = data.films;

    return (
        <div className="Body">
            {films.map(obj => <Film film={obj} key={obj.episode_id} onClick={onClick}/>)}
        </div>
    )
}

export {Body as default};