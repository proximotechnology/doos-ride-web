import type { TranslationKey } from "@/lib/types/translation";
import z from "zod";

export const editProfileSchemaBuilder = (
  t: (key: TranslationKey, _?: Record<string, string | number>) => string
) => {
  const profileSchema = z.object({
    name: z.string().min(1, t("profile.name.error")),
    country: z.string().min(1, t("profile.country.error")),
    email: z.email(t("profile.email.error")),
  });

  return profileSchema;
};
