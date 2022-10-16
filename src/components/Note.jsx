import React from "react";
import notes from "../notes";
import Entry from "./Entry";

function Note(){
    return (
        <div>
            {notes.map(entry => (
                <Entry
                    key = {entry.key}
                    title = {entry.title}
                    content = {entry.content}
                />
            ))}
        </div>
        
    );
}

export default Note