import { create } from "zustand";

type State = {
  traffic: boolean;
  trafficVolume: number;
  peopleVolume: number;
  summerStormVolume: number;
  wavesVolume: number;
  windVolume: number;
};

type Actions = {
  toggleTraffic: () => void;
  setTrafficVolume: (volume: number) => void;
  setPeopleVolume: (volume: number) => void;
  setSummerStormVolume: (volume: number) => void;
  setWavesVolume: (volume: number) => void;
  setWindVolume: (volume: number) => void;
};

const useSound = create<State & Actions>((set) => ({
  traffic: false,
  trafficVolume: 50,
  peopleVolume: 0,
  summerStormVolume: 0,
  wavesVolume: 0,
  windVolume: 0,
  toggleTraffic: () =>
    set((state) => ({
      traffic: !state.traffic,
    })),
  setTrafficVolume: (trafficVolume) =>
    set(() => ({
      trafficVolume,
    })),
  setPeopleVolume: (peopleVolume) =>
    set(() => ({
      peopleVolume,
    })),
  setSummerStormVolume: (summerStormVolume) =>
    set(() => ({
      summerStormVolume,
    })),
  setWavesVolume: (wavesVolume) =>
    set(() => ({
      wavesVolume,
    })),
  setWindVolume: (windVolume) =>
    set(() => ({
      windVolume,
    })),
}));

export default useSound;
