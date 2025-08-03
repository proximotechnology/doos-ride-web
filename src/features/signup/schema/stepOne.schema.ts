import type { TranslationKey } from "@/lib/types/translation";
import z from "zod";

export const stepOneSchemaBuilder = (
  t: (key: TranslationKey, options?: Record<string, string | number>) => string
) => {
  const StepOneSchema = z.object({
    username: z.string().min(2, t("signup.stepOne.username.error")),
    phone: z.string().min(10, t("signup.stepOne.phone.error")),
    email: z.email(t("signup.stepOne.email.error")),
    password: z.string().min(6, t("signup.stepOne.password.error", { min: 6 })),
    agreeToTerms: z.boolean(),
  });

  return StepOneSchema;
};
