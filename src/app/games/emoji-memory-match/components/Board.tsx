import React from "react";
import { startGame } from "../domain/engine";
import { levels } from "../domain/levels";
import Card from "./Card";
import { GameState } from "../domain/type";

function Board() {
  const game: GameState = startGame(levels[0]);
  return (
    <div>
      {game.deck.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}

export default Board;
