import z from "zod";
import type { TranslationKey } from "@/lib/types/translation";

export const stepThreeSchemaBuilder = (
  t: (key: TranslationKey, options?: Record<string, string | number>) => string
) =>
  z.object({
    carPic : z.any().refine((file) => file instanceof File, {
      message: t("signup.stepThree.carPic.error"),
    }),
    licensePic: z.any().refine((file) => file instanceof File, {
      message: t("signup.stepThree.licensePic.error"),
    }),
    plateNumber: z.string().min(1, t("signup.stepThree.plateNumber.error")),
    brand: z.string().min(1, t("signup.stepThree.brand.error")),
    model: z.string().min(1, t("signup.stepThree.model.error")),
    year: z.string().min(1, t("signup.stepThree.year.error")),
    color: z.string().min(1, t("signup.stepThree.color.error")),
  });
