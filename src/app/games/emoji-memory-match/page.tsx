"use client";

import React, { useEffect, useReducer } from "react";
import ChooseLevel from "./components/ChooseLevel";
import Board from "./components/Board";
import { levels } from "./domain/levels";
import { Level } from "./domain/type";
import {
  createInitialState,
  gameReducer,
} from "./state/gameReducer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const defaultLevel = levels[0];

const Page = () => {
  const [state, dispatch] = useReducer(
    gameReducer,
    defaultLevel,
    (initialLevel: Level) => createInitialState(initialLevel)
  );

  const handleSelectLevel = (nextLevel: Level) => {
    dispatch({ type: "SET_LEVEL", level: nextLevel });
  };

  const handleFlipCard = (cardId: string) => {
    dispatch({ type: "FLIP_CARD", cardId });
  };

  const handleRestart = () => {
    dispatch({ type: "RESTART" });
  };

  useEffect(() => {
    if (!state.game.pendingReset || state.game.flippedIds.length !== 2) return;

    const timeout = setTimeout(() => {
      dispatch({ type: "RESET_FLIPPED" });
    }, 800);

    return () => clearTimeout(timeout);
  }, [state.game.pendingReset, state.game.flippedIds, dispatch]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, pb: 6 }}>
      <ChooseLevel selectedLevel={state.level} onSelectLevel={handleSelectLevel} />
      <Board game={state.game} onFlip={handleFlipCard} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          onClick={handleRestart}
          sx={{
            borderColor: "#0f766e",
            color: "#0f766e",
            fontWeight: 600,
            textTransform: "none",
            px: 3,
            "&:hover": {
              borderColor: "#0b4f49",
              backgroundColor: "rgba(15, 118, 110, 0.1)",
            },
          }}
        >
          Restart level
        </Button>
      </Box>
    </Box>
  );
};

export default Page;
