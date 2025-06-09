import { create } from "zustand";

export type LeadState = {
  goal: string;
};

export type LeadActions = {
  updateGoal: (goal: string) => void;
};

export type LeadStore = LeadState & LeadActions;

export const useLeadStore = create<LeadStore>((set) => ({
  goal: "",
  updateGoal: (by: string) => set(() => ({ goal: by })),
}));
