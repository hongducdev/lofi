import { create } from "zustand";

type State = {
  initialHours: number;
  initialMinutes: number;
  initialSeconds: number;
};

type Actions = {
  setInitialHours: (initialHours: number) => void;
  setInitialMinutes: (initialMinutes: number) => void;
  setInitialSeconds: (initialSeconds: number) => void;
};

export const useTimeInitial = create<State & Actions>((set) => ({
  initialHours: 0,
  initialMinutes: 25,
  initialSeconds: 0,
  setInitialHours: (initialHours) =>
    set(() => ({
      initialHours,
    })),
  setInitialMinutes: (initialMinutes) =>
    set(() => ({
      initialMinutes,
    })),
  setInitialSeconds: (initialSeconds) =>
    set(() => ({
      initialSeconds,
    })),
}));
