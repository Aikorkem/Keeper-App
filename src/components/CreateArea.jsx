import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [entry, setEntry] = useState({ title: "", content: "" });
  const [click, setClick] = useState(false);
  
  function handleChange(e) {
    const { name, value } = e.target;
    setEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          style={{ display: !click && "none" }}
          value={entry.title}
        />

        <textarea
          onClick={() => {
            setClick(true);
          }}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows = {click ? "3" : "1"}
          value={entry.content}
        />
        <Zoom in={click}>
          <Fab
            onClick={() => {
              props.handleClick(entry);
              setEntry({ title: "", content: "" });
            }}
          >
            <AddBoxIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
