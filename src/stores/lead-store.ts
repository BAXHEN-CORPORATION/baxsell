import { createStore } from "zustand";

export type LeadState = {
  goals: LeadOption[];
  goalSelected: LeadOption | null;
  clientTypes: LeadOption[];
  clientTypeSelected?: LeadOption | null;
  productDescription?: string;
  shareContact?: "yes" | "no";
  budget?: string;
};

export type LeadActions = {
  updateGoal: (option: LeadOption) => void;
  updateClientType: (option: LeadOption) => void;
  updateProductDescription: (option: string) => void;
  updateBudget: (option: string) => void;
  updateShareContact: (option: "yes" | "no") => void;
};

export interface LeadOption {
  id: number;
  description: string;
  emoji: string;
}

export type LeadStore = LeadState & LeadActions;

const goals: LeadOption[] = [
  {
    id: 1,
    description: "Família & Momentos Pessoais",
    emoji: "📷",
  },
  {
    id: 2,
    description: "Casamentos & Celebrações",
    emoji: "💍",
  },
  { id: 3, description: "Turismo & Experiências", emoji: "🌍" },
  {
    id: 4,
    description: "Corporativo & Profissional",
    emoji: "👔",
  },
];

const clientTypes: LeadOption[] = [
  { id: 1, description: "Pessoa Individual", emoji: "👤" },
  { id: 2, description: "Família ou Casal", emoji: "👨‍👩‍👧‍👦" },
  { id: 3, description: "Empresa ou Marca", emoji: "🏢" },
  { id: 4, description: "Organizador de Evento", emoji: "🎉" },
];

export const defaultInitState: LeadState = {
  goals,
  goalSelected: null,
  clientTypes,
  clientTypeSelected: null,
  productDescription: "",
  shareContact: "no",
};

export const initLeadStore = (): LeadState => {
  return defaultInitState;
};

export const createLeadStore = (initState: LeadState = defaultInitState) => {
  return createStore<LeadStore>()((set) => ({
    ...initState,
    updateClientType: (by: LeadOption) =>
      set(() => ({ clientTypeSelected: by })),
    updateGoal: (by: LeadOption) => {
      console.log("Updating goal to:", by);
      set(() => ({ goalSelected: by }));
    },
    updateProductDescription: (by: string) =>
      set(() => ({ productDescription: by })),
    updateShareContact: (by: "yes" | "no") => set(() => ({ shareContact: by })),
    updateBudget: (by: string) => set(() => ({ budget: by })),
  }));
};

export const selectLeadGoals = (state: LeadState) => state.goals;
export const selectClientTypes = (state: LeadState) => state.clientTypes;
export const selectLeadInfo = (state: LeadState) => ({
  goalSelected: state.goalSelected,
  clientTypeSelected: state.clientTypeSelected,
  productDescription: state.productDescription,
  shareContact: state.shareContact,
  budget: state.budget,
});
