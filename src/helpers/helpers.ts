import { WORDS } from "../constants/contants";

export const pickRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
};
