import { create, createStore } from "zustand";

export type BusinessState = {
  serviceProviderName: string;
  cta: string;
  heroHeading: string;
};

export type BusinessActions = {
  updateCta: (by: string) => void;
  updateServiceProviderName: (name: string) => void;
};

export type BusinessStore = BusinessState & BusinessActions;

export const initBusinessStore = (): BusinessState => {
  return {
    cta: "Vamos contar sua história?",
    serviceProviderName: "Crismel Fotos",
    heroHeading:
      "Mais do que  fotos  criamos  experiências  que  duram  para  sempre.",
  };
};

export const defaultInitState: BusinessState = {
  cta: "Vamos contar sua história?",
  serviceProviderName: "Crismel Fotos",
  heroHeading:
    "Mais do que  fotos  criamos  experiências  que  duram  para  sempre.",
};

export const createBusinessStore = (
  initState: BusinessState = defaultInitState
) => {
  return createStore<BusinessStore>()((set) => ({
    ...initState,
    updateCta: (by: string) => set((state) => ({ cta: by })),
    updateServiceProviderName: (by: string) =>
      set((state) => ({ serviceProviderName: by })),
  }));
};

const formatHeroHeading = (heading: string) => {
  return heading.split("  ");
};

export const selectBusinessCta = (state: BusinessStore) => state.cta;
export const selectServiceProviderName = (state: BusinessStore) =>
  state.serviceProviderName;
export const selectHeroHeading = (state: BusinessStore) =>
  formatHeroHeading(state.heroHeading);
