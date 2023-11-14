import { create } from "zustand";

type State = {
  traffic: boolean;
  trafficVolume: number;
};

type Actions = {
  toggleTraffic: () => void;
  setTrafficVolume: (volume: number) => void;
};

const useSound = create<State & Actions>((set) => ({
  traffic: false,
  trafficVolume: 50,
  toggleTraffic: () =>
    set((state) => ({
      traffic: !state.traffic,
    })),
  setTrafficVolume: (volume) =>
    set(() => ({
      trafficVolume: volume,
    })),
}));

export default useSound;
