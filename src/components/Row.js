import React from "react";
import Seat from "./Seat.js";

export default function Row() {
  const numberOfSeats = 48;
  return (
    <>
      {new Array(numberOfSeats / 4).fill().map((_, rowNum) => (
        <div key={rowNum} className="carriage-row">
          <Seat number={rowNum * 4 + 1} />
          <Seat number={rowNum * 4 + 2} />

          <div className="aisle-spacer"></div>

          <Seat number={rowNum * 4 + 3} />
          <Seat number={rowNum * 4 + 4} />
        </div>
      ))}
    </>
  );
}
