import type { TranslationKey } from "@/lib/types/translation";
import z from "zod";

export const stepTwoSchemaBuilder = (
  t: (key: TranslationKey, options?: Record<string, string | number>) => string
) => {
  const stepTwoSchema = z.object({
    profilePic: z.any().refine((file) => file instanceof File, {
      message: t("signup.stepTwo.profilePic.error"),
    }),
    firstName: z.string().min(1, t("signup.stepTwo.firstName.error")),
    lastName: z.string().min(1, t("signup.stepTwo.lastName.error")),
    dob: z.date({
      error: t("signup.stepTwo.dob.error"),
    }),
    address: z.string().min(1, t("signup.stepTwo.address.error")),
    address2: z.string().optional(),
    zip: z.string().min(1, t("signup.stepTwo.zip.error")),
    city: z.string().min(1, t("signup.stepTwo.city.error")),
    country: z.string().min(1, t("signup.stepTwo.country.error")),
    nationalId: z.string().min(1, t("signup.stepTwo.nationalId.error")),
  });

  return stepTwoSchema;
};
