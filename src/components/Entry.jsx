import React from "react";

function Entry(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => props.deleteEntry(props.id)}>DELETE</button>
        </div>
    );
};

export default Entry;