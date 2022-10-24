import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Entry from "./Entry";
import CreateArea from "./CreateArea";

function App() {
  const [data, setData] = useState([]);

  function addEntry(entry) {
    setData((prevData) => [...prevData, entry]);
  }

  function deleteEntry(id) {
    setData((prevData) => {
      return prevData.filter((entry, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick={addEntry} />
      <div>
        {data.map((entry, index) => (
          <Entry
            key={index}
            id={index}
            title={entry.title}
            content={entry.content}
            deleteEntry={deleteEntry}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
