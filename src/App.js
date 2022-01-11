import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [cards, setCards] = useState([]);

  function handleClick(e) {
    e.preventDefault();

    console.log(typeof date);

    // let parsedDate = new Date(date);

    // parsedDate = date.toLocaleDateString("en-US", options);
    setDate(date.toString());
    console.log(date);

    cards.push({ title, date, index: Date.now() });

    setCards(cards);

    setTitle("");
    setDate("");
  }

  function handleDelete(index) {
    setCards(
      cards.filter((card) => {
        console.log(index, card.index, card.index !== index);
        return card.index !== index;
      })
    );
  }

  // function handleEdit()

  return (
    <>
      <form className="form" onSubmit={handleClick}>
        <div className="wrapper">
          <div className="inputs">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Habit Name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="date"
              name="calorie"
              id="calorie"
              placeholder="Habit Count"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit">
            ADD HABIT
          </button>
        </div>
      </form>
      <div className="items">
        {cards.map((data) => (
          <Card
            key={data.index}
            title={data.title}
            date={data.date}
            handleDelete={() => handleDelete(data.index)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
