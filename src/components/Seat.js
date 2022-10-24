import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Seat(props) {
  const { seatClicked, setSeatClicked } = useContext(UserContext);
  const handleClick = () => {
    if (seatClicked) {
      setSeatClicked(false);
    }
    if (!seatClicked) {
      setSeatClicked(true);
    }
  };
  return (
    <div
      className=""
      onClick={() => {
        handleClick();
      }}
    >
      <svg class="train-seat" width="100" height="100" viewBox="0 0 100 100">
        <g
          class="train-seat__seat train-seat__seat--occupied"
          style={{ fill: seatClicked ? "green" : "gray" }}
        >
          <rect x="10" y="15" width="80" height="70" rx="15" ry="15" />
          <rect x="30" y="10" width="52" height="15" rx="3" ry="3" />
          <rect x="30" y="75" width="52" height="15" rx="3" ry="3" />
          <rect x="70" y="10" width="20" height="80" rx="9.821" ry="10" />
        </g>

        <text class="train-seat__number" x="25" y="60">
          {props.number}
        </text>
      </svg>
    </div>
  );
}
