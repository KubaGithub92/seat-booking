import "./App.css";
import React from "react";
import SeatWithContext from "./components/SeatWithContext";

function App() {
  const numberOfSeats = 48;
  return (
    <div className="train-carriage">
      {new Array(numberOfSeats / 4).fill(null).map((n, row) => (
        <div key={row} className="carriage-row">
          <SeatWithContext number={row * 4 + 1} />
          <SeatWithContext number={row * 4 + 2} />

          <div className="aisle-spacer"></div>

          <SeatWithContext number={row * 4 + 3} />
          <SeatWithContext number={row * 4 + 4} />
        </div>
      ))}
    </div>
  );
}

export default App;
