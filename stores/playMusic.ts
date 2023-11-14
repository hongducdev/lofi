import { create } from "zustand";

type State = {
  isMusic: boolean;
  volumeMusic: number;
};

type Actions = {
  toggleMusic: () => void;
  setVolumeMusic: (volume: number) => void;
};

const useMusic = create<State & Actions>((set) => ({
  isMusic: false,
  toggleMusic: () =>
    set((state) => ({
      isMusic: !state.isMusic,
    })),
  volumeMusic: 50,
  setVolumeMusic: (volumeMusic) =>
    set(() => ({
      volumeMusic,
    })),
}));

export default useMusic;
