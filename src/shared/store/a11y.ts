import { create } from "zustand";

export const useA11yStore = create((set) => ({
  a11yMode: false,
  toggleA11yMode: () =>
    set((state: any) => {
      const newState = !state.a11yMode;
      newState
        ? document.body.classList.add("a11y")
        : document.body.classList.remove("a11y");
      return { a11yMode: newState };
    }),
}));
