import React from "react";
import styles from "./Card.module.css";
import { type Card as CardType } from "../../domain/type";

type CardProps = {
  card: CardType;
  isFlipped?: boolean;
  isMatched?: boolean;
  isMismatch?: boolean;
  disabled?: boolean;
  onFlip?: (card: CardType) => void;
};

const Card: React.FC<CardProps> = ({
  card,
  isFlipped,
  isMatched,
  isMismatch,
  disabled = false,
  onFlip,
}) => {
  const reveal = isMatched || isFlipped || onFlip === undefined;
  const handleClick = () => {
    if (disabled || isMatched || !onFlip) return;
    onFlip(card);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        styles.card,
        reveal ? styles.flipped : "",
        isMatched ? styles.matched : "",
        isMismatch ? styles.mismatch : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={reveal ? card.symbol : "Hidden card"}
      disabled={disabled || isMatched}
    >
      <span className={`${styles.face} ${styles.front}`}>{card.symbol}</span>
      <span className={`${styles.face} ${styles.back}`}></span>
    </button>
  );
};

export default Card;
