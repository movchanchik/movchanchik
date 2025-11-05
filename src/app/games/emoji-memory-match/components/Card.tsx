import React from "react";
import { type Card } from "../domain/type";

function Card({ card }: { card: Card }) {
  return <div>{card.symbol}</div>;
}

export default Card;
