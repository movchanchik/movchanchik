"use client";
import React, { useState } from "react";
import Board from "./Board";
import { levels } from "../domain/levels";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Wrapper from "@/app/components/wrapper/Wrapper";
import { Level } from "../domain/type";
import { startGame } from "../domain/engine";

function ChooseLevel() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);

  const handleChooseLevel = (level: Level) => {
    setSelectedLevel(level);
    startGame(level);
  };

  return (
    <Wrapper>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ mt: 4, mb: 2 }}
      >
        Choose a level of a game
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 4,
          justifyContent: "center",
        }}
      >
        {levels.map((level) => (
          <Button
            key={level.id}
            variant="contained"
            onClick={() => handleChooseLevel(level)}
            disabled={selectedLevel === level}
          >
            Level {level.id}: {level.name}
          </Button>
        ))}
      </Box>
      {selectedLevel && <Board level={selectedLevel} />}
    </Wrapper>
  );
}

export default ChooseLevel;
