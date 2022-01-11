import "./Card.css";
import React, { useState } from "react";

function Card(props) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);

  function validate() {
    setEditing(false);
    console.log(date);
    // let newCalorie = dae.replace(/\D/g, "");
    // setCalorie(newCalorie);
  }

  return (
    <>
      <div className="outer">
        {editing ? (
          <input
            className="newInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h2 className="item_name">{title}</h2>
        )}
        {editing ? (
          <input
            className="newInput"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        ) : (
          <p className="information">You Listed This Habit On: {date}</p>
        )}
        <div className="buttons">
          <button className="btn" id="delete" onClick={props.handleDelete}>
            DELETE
          </button>
          <button
            className="btn"
            id="edit"
            onClick={() => (editing ? validate() : setEditing(true))}
          >
            {editing ? "SAVE" : "EDIT"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
