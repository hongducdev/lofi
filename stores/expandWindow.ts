import { create } from "zustand";

type State = {
  isExpanded: boolean;
};

type Actions = {
  toggleExpand: () => void;
};

const useWindowStore = create<State & Actions>((set) => ({
  isExpanded: false,
  toggleExpand: () =>
    set((state) => ({
      isExpanded: !state.isExpanded,
    })),
}));

export default useWindowStore;
