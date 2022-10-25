import React, { useState } from "react";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function Entry(props){
    const [show, setShow] = useState(false);
    return (
        <div className="note">
            <h1 onClick = {() => setShow(true)}>{props.title}</h1>
            <p style={{ display: !show && "none" }}>{props.content}</p>
            <Zoom in = {show}>
            <Fab onClick={() => props.deleteEntry(props.id)}><DeleteSweepIcon /></Fab>
            </Zoom>
        </div>
    );
};

export default Entry;