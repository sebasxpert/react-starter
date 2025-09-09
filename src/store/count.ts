import { atom, useAtom } from "jotai";

export const count = atom(0);
export const doubledCount = atom((get) => get(count) * 2);

export const useCount = () => useAtom(count);
