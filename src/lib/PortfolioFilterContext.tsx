"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type FilterValue = "all" | "fintech" | "edtech" | "ai-utility";

interface PortfolioFilterContextType {
  filter: FilterValue;
  setFilter: (f: FilterValue) => void;
}

const PortfolioFilterContext = createContext<PortfolioFilterContextType>({
  filter: "all",
  setFilter: () => {},
});

export function PortfolioFilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState<FilterValue>("all");
  return (
    <PortfolioFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </PortfolioFilterContext.Provider>
  );
}

export function usePortfolioFilter() {
  return useContext(PortfolioFilterContext);
}