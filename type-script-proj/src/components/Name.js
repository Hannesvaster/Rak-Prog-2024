import React from "react";
import './Name.css';

const Name = ({ title, hobbies }) => {
  return (
    <div className="name-container">
      <h1>{title}</h1>
      
      <h2>Hobbies/Interests:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>

      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message" />
        </label>
        <button type="submit">Call to Action</button>
      </form>
    </div>
  );
};

export default Name;
