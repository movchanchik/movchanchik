import React from "react";
import { startGame } from "../domain/engine";
import { levels } from "../domain/levels";
import Card from "./card/Card";
import { GameState } from "../domain/type";
import Wrapper from "@/app/components/wrapper/Wrapper";

function Board({ level = levels[0] }) {
  const game: GameState = startGame(level);

  return (
    <Wrapper>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${level.cols}, auto)`,
          gap: "12px",
          justifyContent: "center",
          alignItems: "center",
          width: "max-content",
          margin: "0 auto",
        }}
      >
        {game.deck.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </Wrapper>
  );
}

export default Board;
