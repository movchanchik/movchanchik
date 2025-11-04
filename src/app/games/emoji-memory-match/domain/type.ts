export type Card = {
  id: string;
  symbol: string;
  matched: boolean;
};

export type Deck = Card[];

export type Level = {
  id: number;
  name: string;
  rows: number;
  cols: number;
  symbols: string[];
  pairCount: number;
};

export type GameState = {
  deck: Deck;
  flippedCards: Card[];
  matchedCards: Card[];
  moves: number;
  level: Level;
  isGameOver: boolean;
};
