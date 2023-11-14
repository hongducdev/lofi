import { create } from "zustand";

type State = {
  isRain: boolean;
};

type Actions = {
  toggleRain: () => void;
};

const useRain = create<State & Actions>((set) => ({
  isRain: false,
  toggleRain: () =>
    set((state) => ({
      isRain: !state.isRain,
    })),
}));

export default useRain;
