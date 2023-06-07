import { atom } from "recoil";

import { StoragedCard } from "../@types/navigation";

export const cardsState = atom<StoragedCard[]>({
  key: 'cardsState',
  default: []
})