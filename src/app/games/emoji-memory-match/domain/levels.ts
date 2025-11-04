import { Level } from "./type";

export const levels: Level[] = [
  {
    id: 1,
    name: "Beginner",
    rows: 2,
    cols: 2,
    pairCount: 2,
    symbols: ["🍎", "🍌"],
  },
  {
    id: 2,
    name: "Easy",
    rows: 2,
    cols: 3,
    pairCount: 3,
    symbols: ["🍇", "🍒", "🍓"],
  },
  {
    id: 3,
    name: "Medium",
    rows: 3,
    cols: 4,
    pairCount: 6,
    symbols: ["🍉", "🍍", "🥝", "🍑", "🍊", "🍋"],
  },
  {
    id: 4,
    name: "Hard",
    rows: 4,
    cols: 4,
    pairCount: 8,
    symbols: ["🦊", "🐼", "🐵", "🐸", "🐶", "🐱", "🐻", "🐷"],
  },
];
