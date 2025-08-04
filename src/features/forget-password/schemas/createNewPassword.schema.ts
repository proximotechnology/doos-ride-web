import type { TranslationKey } from "@/lib/types/translation";
import z from "zod";

export const createNewPasswordSchemaBuilder = (
  t: (key: TranslationKey, options?: Record<string, string | number>) => string
) => {
  const passwordSchema = z
    .string()
    .min(6, t("resetPassword.newPassword.error", { min: 6 }));

  const schema = z
    .object({
      password: passwordSchema,
      confirmPassword: passwordSchema,
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: t("resetPassword.confirmPassword.match"),
    });

  return schema;
};
