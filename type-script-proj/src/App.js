import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Name from "./components/Name";

function App() {
  const [show, setShow] = useState(true);
  
  // Tagame, et hobbies on massiiv
  const hobbies = ["Pallimängud", "Koodimine", "Arvutimängud", "Muusika"];

  return (
    <>
      <Counter />
      {/* Edastame title ja hobbies õigesti */}
      <Name title="Hannes Väster" hobbies={hobbies} />
    </>
  );
}

export default App;
