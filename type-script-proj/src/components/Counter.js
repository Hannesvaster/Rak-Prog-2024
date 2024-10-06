import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // Funktsioon, mis muudab counterit vastavalt nupu väärtusele
  const modifyCounter = (value) => setCounter((prevCounter) => prevCounter + value);

  return (
    <>
      <h1>{counter}</h1>
      
      {/* Dünaamiliste nuppude loomine */}
      {[1, 5, 50, -1, -5, -50].map((element) => (
        <button key={element} onClick={() => modifyCounter(element)}>
          {element > 0 ? `+${element}` : element}
        </button>
      ))}

      {/* Async nupp */}
      <button onClick={() => setTimeout(() => modifyCounter(1), 2000)}>
        async +1
      </button>
    </>
  );
};

export default Counter;
