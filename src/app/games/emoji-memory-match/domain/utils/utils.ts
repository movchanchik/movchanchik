import { Deck } from "../type";

export const findCard = (deck: Deck, id: string) =>
  deck.find((card) => card.id === id);

export const markMatchedCards = (
  deck: Deck,
  cardAId: string,
  cardBId: string
): Deck => {
  return deck.map((card) => {
    if (card.id === cardAId || card.id === cardBId) {
      return { ...card, matched: true };
    }
    return card;
  });
};

export const isGameWon = (deck: Deck): boolean => {
  return deck.every((card) => card.matched);
};
