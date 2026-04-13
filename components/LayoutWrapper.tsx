"use client";
import React from "react";
import { LoadingProvider } from "@/context/LoadingContext";
import { Preloader } from "@/components/ui/Preloader";
import { useLoading } from "@/context/LoadingContext";

const InnerLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading } = useLoading();
  return (
    <>
      <Preloader isLoading={isLoading} />
      {children}
    </>
  );
};

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadingProvider>
      <InnerLayout>{children}</InnerLayout>
    </LoadingProvider>
  );
};
