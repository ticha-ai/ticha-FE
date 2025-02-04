import { create } from 'zustand';

import { PAPER_OPTIONS } from '@/constants/paperOption';

interface PaperOptionAction {
  setOption: (option: string, value: string | number) => void;
  isFulfilled: () => boolean;
}

interface PaperOptionState {
  options: Record<string, string | number | null>;
}

const createDefaultPaperOption = (): PaperOptionState => {
  const defaultOptions: Record<string, string | number | null> = {};

  PAPER_OPTIONS.forEach((option) => {
    defaultOptions[option.optionKey] = null;
  });

  return { options: defaultOptions };
};

const defaultPaperOption = createDefaultPaperOption();

const paperOptionStore = create<PaperOptionAction & PaperOptionState>(
  (set, get) => ({
    ...defaultPaperOption,

    setOption: (option: string, value: string | number) =>
      set((state) => ({
        options: {
          ...state.options,
          [option]: state.options[option] === value ? null : value,
        },
      })),

    isFulfilled: () =>
      !Object.values(get().options).some((value) => value === null),
  }),
);

export default paperOptionStore;
