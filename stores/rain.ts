import { create } from "zustand";

type State = {
  isRain: boolean;
  volumeRain: number;
};

type Actions = {
  toggleRain: () => void;
  setVolumeRain: (volume: number) => void;
};

const useRain = create<State & Actions>((set) => ({
  isRain: false,
  toggleRain: () =>
    set((state) => ({
      isRain: !state.isRain,
    })),
  volumeRain: 50,
  setVolumeRain: (volumeRain) =>
    set(() => ({
      volumeRain,
    })),
}));

export default useRain;
