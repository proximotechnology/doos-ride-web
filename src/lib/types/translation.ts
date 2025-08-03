import { en } from "@/locales/en"; // adjust your path

// Utility type to flatten nested keys into dot notation
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

type Prev = [never, 0, 1, 2, 3, 4, 5]; // prevents infinite recursion

type NestedKeys<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends object
        ? Join<K, NestedKeys<T[K], Prev[D]>>
        : K;
    }[keyof T & (string | number)]
  : "";

type Translation = typeof en;
export type TranslationKey = NestedKeys<Translation>;
