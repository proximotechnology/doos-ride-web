import type { TranslationKey } from "@/lib/types/translation";
import z from "zod";

export const signupUserSchemaBuilder = (
  t: (key: TranslationKey, options?: Record<string, string | number>) => string
) => {
  const signUpUserSchema = z.object({
    username: z.string().min(2, t("signupUser.username.error")),
    phone: z.string().min(6, t("signupUser.phone.error")),
    email: z.email(t("signupUser.email.error")),
    password: z.string().min(6, t("signupUser.password.error", {min : 6})),
    agreeToTerms: z.boolean(),
  });

  return signUpUserSchema;
};
