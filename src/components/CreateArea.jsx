import React, { useState } from "react";

function CreateArea(props) {
  const [entry, setEntry] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  }

  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={entry.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={entry.content}
        />
        <button
          onClick={() => {
            props.handleClick(entry);
            setEntry({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
