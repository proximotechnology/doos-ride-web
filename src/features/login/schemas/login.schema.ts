import type { TranslationKey } from "@/lib/types/translation";
import z from "zod";

export const loginSchemaBuilder = (
  t: (key: TranslationKey, options?: Record<string, string | number>) => string
) => {
  const signInSchema = z.object({
    email: z.email(t("login.email.error")),
    password: z.string().min(6, t("login.password.error", { min: 6 })),
  });

  return signInSchema;
};
