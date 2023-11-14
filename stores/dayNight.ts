import { create } from "zustand";

type State = {
  isDay: boolean;
};

type Actions = {
  toggleDay: () => void;
};

const useDayNight = create<State & Actions>((set) => ({
  isDay: true,
  toggleDay: () =>
    set((state) => ({
      isDay: !state.isDay,
    })),
}));

export default useDayNight;
