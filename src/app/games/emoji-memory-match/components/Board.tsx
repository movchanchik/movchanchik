import React from "react";
import Card from "./card/Card";
import { GameState } from "../domain/type";
import Wrapper from "@/app/components/wrapper/Wrapper";

type BoardProps = {
  game: GameState;
  onFlip: (cardId: string) => void;
};

function Board({ game, onFlip }: BoardProps) {
  const { level, deck, flippedIds, isGameOver } = game;
  const lockBoard = flippedIds.length === 2;

  if (isGameOver) {
    return (
      <Wrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            padding: "48px 0",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "1.75rem", fontWeight: 600 }}>
            🎉 You win! Congratulations!
          </p>
          <p style={{ color: "#475569" }}>
            Restart or pick a new level to keep the streak going.
          </p>
        </div>
      </Wrapper>
    );
  }

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
        {deck.map((card) => {
          const isFlipped = flippedIds.includes(card.id);
          const isMismatch =
            game.pendingReset && isFlipped && !card.matched;
          return (
            <Card
              card={card}
              key={card.id}
              isFlipped={isFlipped}
              isMatched={card.matched}
              isMismatch={isMismatch}
              disabled={lockBoard && !isFlipped}
              onFlip={(targetCard) => onFlip(targetCard.id)}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

export default Board;
