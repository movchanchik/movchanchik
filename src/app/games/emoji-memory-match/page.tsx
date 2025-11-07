"use client";

import React, { useState } from "react";
import ChooseLevel from "./components/ChooseLevel";
import { levels } from "./domain/levels";
import { Level } from "./domain/type";

const Page = () => {
  const [level, setLevel] = useState<Level>(levels[0]);

  const handleSelectLevel = (nextLevel: Level) => {
    setLevel(nextLevel);
  };

  return (
    <ChooseLevel selectedLevel={level} onSelectLevel={handleSelectLevel} />
  );
};

export default Page;
