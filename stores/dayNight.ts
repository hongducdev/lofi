import { create } from "zustand";

type State = {
  isDay: boolean;
};

type Actions = {
  toggleDay: () => void;
  setIsDay: (isDay: boolean) => void;
};

const useDayNight = create<State & Actions>((set) => ({
  isDay: true,
  toggleDay: () =>
    set((state) => ({
      isDay: !state.isDay,
    })),
  setIsDay: (isDay) =>
    set(() => ({
      isDay,
    })),
}));

export default useDayNight;
