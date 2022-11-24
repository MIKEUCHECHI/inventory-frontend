import { combine } from "zustand/middleware";
import { persist } from ".";
import create from "zustand";

const defaultState = {
  token: undefined as string | undefined,
  pharmDetailID: undefined as string | undefined,
};

export const useAuthState = create(
  persist(
    {
      key: "auth",
    },
    combine(defaultState, (set) => ({
      setToken: (token: string) =>
        set((state) => ({
          ...state,
          token,
        })),
      setUrl: (pharmDetailID: string) =>
        set((state) => ({
          ...state,
          pharmDetailID,
        })),
      reset: () => set(() => defaultState),
    }))
  )
);
