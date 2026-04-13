"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  resetLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const setIsLoadingValue = useCallback((loading: boolean) => {
    setIsLoading(loading);
  }, []);

  const resetLoading = useCallback(() => {
    setIsLoading(true);
    
    // Safety watchdog: force resolve after 5 seconds to prevent deadlock
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading: setIsLoadingValue, resetLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
