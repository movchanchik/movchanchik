import { GameState, Level } from "../domain/type";
import { flipCard, startGame } from "../domain/engine";

export type GameContextState = {
  level: Level;
  game: GameState;
};

export type GameAction =
  | { type: "SET_LEVEL"; level: Level }
  | { type: "RESTART" }
  | { type: "FLIP_CARD"; cardId: string }
  | { type: "RESET_FLIPPED" };

export const createInitialState = (level: Level): GameContextState => ({
  level,
  game: startGame(level),
});

export const gameReducer = (
  state: GameContextState,
  action: GameAction
): GameContextState => {
  switch (action.type) {
    case "SET_LEVEL":
      return createInitialState(action.level);
    case "RESTART":
      return createInitialState(state.level);
    case "FLIP_CARD":
      return {
        ...state,
        game: flipCard(state.game, action.cardId),
      };
    case "RESET_FLIPPED":
      return {
        ...state,
        game: {
          ...state.game,
          flippedIds: [],
          pendingReset: false,
        },
      };
    default:
      return state;
  }
};
