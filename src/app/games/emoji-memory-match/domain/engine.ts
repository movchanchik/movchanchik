import { Deck, GameState, Level } from "./type";
import { findCard, isGameWon, markMatchedCards } from "./utils/utils";

export const makeDeck = (level: Level): Deck => {
  const cards: Deck = [];

  if (
    level.cols * level.rows !== level.pairCount * 2 ||
    level.symbols.length < level.pairCount
  )
    return cards;

  level.symbols.forEach((symbol) => {
    const cardA = {
      id: crypto.randomUUID(),
      symbol,
      matched: false,
    };
    const cardB = {
      id: crypto.randomUUID(),
      symbol,
      matched: false,
    };
    cards.push(cardA, cardB);
  });

  // Shuffle the cards
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
};

export const startGame = (level: Level) => {
  const deck = makeDeck(level);
  return {
    deck,
    flippedIds: [],
    moves: 0,
    level,
    isGameOver: false,
    pendingReset: false,
  };
};

export const flipCard = (gameState: GameState, cardId: string) => {
  if (gameState.isGameOver || gameState.pendingReset) return gameState;

  const card = findCard(gameState.deck, cardId);
  if (!card) return gameState;

  if (card.matched) return gameState;

  if (gameState.flippedIds.includes(card.id)) return gameState;

  if (gameState.flippedIds.length === 2) return gameState;

  if (gameState.flippedIds.length === 0)
    return {
      ...gameState,
      flippedIds: [card.id],
    };

  if (gameState.flippedIds.length === 1) {
    const firstCard = findCard(gameState.deck, gameState.flippedIds[0]);
    if (!firstCard) return gameState;

    const isMatch =
      firstCard.symbol === card.symbol && firstCard.id !== card.id;

    if (!isMatch) {
      return {
        ...gameState,
        flippedIds: [firstCard.id, card.id],
        moves: gameState.moves + 1,
        pendingReset: true,
      };
    }

    const updatedDeck = markMatchedCards(gameState.deck, firstCard.id, card.id);
    const done = isGameWon(updatedDeck);

    return {
      ...gameState,
      deck: updatedDeck,
      flippedIds: [],
      moves: gameState.moves + 1,
      isGameOver: done,
      pendingReset: false,
    };
  }

  return gameState;
};
