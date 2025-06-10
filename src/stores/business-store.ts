import { createStore } from "zustand";

export type BusinessState = {
  serviceProviderName: string;
  cta: string;
  heroHeading: string;
};

export type BusinessActions = {
  updateCta: (by: string) => void;
};

export type BusinessStore = BusinessState & BusinessActions;

export const defaultInitState: BusinessState = {
  cta: "Vamos contar sua história?",
  serviceProviderName: "Crismel Fotos",
  heroHeading:
    "Mais do que  fotos  criamos  experiências  que  duram  para  sempre.",
};
export const initBusinessStore = (): BusinessState => {
  return defaultInitState;
};

export const createBusinessStore = (
  initState: BusinessState = defaultInitState
) => {
  return createStore<BusinessStore>()((set) => ({
    ...initState,
    updateCta: (by: string) => set(() => ({ cta: by })),
  }));
};

const formatHeroHeading = (heading: string) => {
  return heading.split("  ");
};

export const selectBusinessCta = (state: BusinessState) => state.cta;
export const selectHeroHeading = (state: BusinessState) =>
  formatHeroHeading(state.heroHeading);
