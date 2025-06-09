"use client";

import {
  BusinessStore,
  createBusinessStore,
  initBusinessStore,
} from "@baxsell/stores/business-store";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

export type BusinessStoreApi = ReturnType<typeof createBusinessStore>;

export const BusinessStoreContext = createContext<BusinessStoreApi | undefined>(
  undefined
);

export interface BusinessStoreProviderProps {
  children: ReactNode;
}

export const BusinessStoreProvider = ({
  children,
}: BusinessStoreProviderProps) => {
  const storeRef = useRef<BusinessStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createBusinessStore(initBusinessStore());
  }

  return (
    <BusinessStoreContext.Provider value={storeRef.current}>
      {children}
    </BusinessStoreContext.Provider>
  );
};

export const useBusinessStore = <T,>(
  selector: (store: BusinessStore) => T
): T => {
  const businessStoreContext = useContext(BusinessStoreContext);

  if (!businessStoreContext) {
    throw new Error(
      `useBusinessStore must be used within BusinessStoreProvider`
    );
  }

  return useStore(businessStoreContext, selector);
};
