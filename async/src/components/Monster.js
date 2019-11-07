import React from "react";

const Monster = props => {
    //console.log("Monster", props)

    return(
        <div className="card">
            <p className="id">Episode {props.episode.episode_id}</p>
            <p className="title">{props.episode.title}</p>
            <p className="jpn">{props.episode.title_japanese}</p>
            {/* <p className="aired">{props.episode.aired}</p> */}
        </div>
    )
}

export default Monster;