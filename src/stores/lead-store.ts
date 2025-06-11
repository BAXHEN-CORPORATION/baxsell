import { createStore } from "zustand";

export type LeadState = {
  goals: LeadOption[];
  goalSelected: LeadOption | null;
  clientTypes: LeadOption[];
  clientTypeSelected?: LeadOption | null;
  productDescription?: string;
};

export type LeadActions = {
  updateGoal: (option: LeadOption) => void;
  updateClientType: (option: LeadOption) => void;
  updateProductDescription: (option: string) => void;
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
};

export const initLeadStore = (): LeadState => {
  return defaultInitState;
};

export const createLeadStore = (initState: LeadState = defaultInitState) => {
  return createStore<LeadStore>()((set) => ({
    ...initState,
    updateGoal: (by: LeadOption) => set(() => ({ goalSelected: by })),
    updateClientType: (by: LeadOption) =>
      set(() => ({ clientTypeSelected: by })),
    updateProductDescription: (by: string) =>
      set(() => ({ productDescription: by })),
  }));
};

export const selectLeadGoals = (state: LeadState) => state.goals;
export const selectClientTypes = (state: LeadState) => state.clientTypes;
