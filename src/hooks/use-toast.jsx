"use client";
import { useCallback } from "react";

export function useToast() {
  const toast = useCallback(({ title, description }) => {
    alert(title + (description ? "\n\n" + description : ""));
  }, []);
  return { toast };
}
