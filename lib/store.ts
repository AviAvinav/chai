import { create } from "zustand";

type State = {
  click: number;
};

type Actions = {
  incrementClick: () => void;
  decrementClick: () => void;
};

export const useStore = create<State & Actions>((set) => ({
  click: 0,
  incrementClick: () => set((state) => ({ click: state.click + 1 })),
  decrementClick: () => set((state) => ({ click: state.click - 1 })),
}));
