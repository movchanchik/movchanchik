import React from "react";
import { levels } from "../domain/levels";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Wrapper from "@/app/components/wrapper/Wrapper";
import { Level } from "../domain/type";

type ChooseLevelProps = {
  selectedLevel: Level;
  onSelectLevel: (level: Level) => void;
};

function ChooseLevel({ selectedLevel, onSelectLevel }: ChooseLevelProps) {
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
            onClick={() => onSelectLevel(level)}
            disabled={selectedLevel.id === level.id}
            sx={{
              backgroundColor: selectedLevel.id === level.id ? "#0f3b32" : "#0f766e",
              color: "#f8fafc",
              textTransform: "none",
              fontWeight: 600,
              px: 3,
              "&:hover": {
                backgroundColor: selectedLevel.id === level.id ? "#0d2a24" : "#0c5d55",
              },
              "&.Mui-disabled": {
                backgroundColor: "#0f3b32",
                color: "#bfe7db",
                border: "none",
              },
            }}
          >
            Level {level.id}: {level.name}
          </Button>
        ))}
      </Box>
    </Wrapper>
  );
}

export default ChooseLevel;
