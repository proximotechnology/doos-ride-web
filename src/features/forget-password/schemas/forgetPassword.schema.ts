import type { TranslationKey } from "@/lib/types/translation";
import z from "zod";

export const forgetPasswordSchemaBuilder = (
  t: (key: TranslationKey, options?: Record<string, string | number>) => string
) => {
  const schema = z.object({
    identifier: z
      .string()
      .min(3, t("forgotPassword.identifier.error"))
      .max(100),
  });

  return schema;
};
