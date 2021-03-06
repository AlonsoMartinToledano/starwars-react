import React from 'react';
import "./styles.css";

import Film from "./Film";

const Body = (props) => {
    const {data, films, onClick} = props;

    return (
        <div className="Body">
            {films.map(obj => <Film data={data} film={obj} key={obj.episode_id} onClick={onClick}/>)}
        </div>
    )
}

export {Body as default};