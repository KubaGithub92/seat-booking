import React from "react";
import Seat from "./Seat";
import { UserContext } from "../UserContext";
import { useState } from "react";

export default function SeatWithContext(props) {
  const [seatClicked, setSeatClicked] = useState(false);
  return (
    <UserContext.Provider value={{ seatClicked, setSeatClicked }}>
      <Seat number={props.number} />
    </UserContext.Provider>
  );
}
