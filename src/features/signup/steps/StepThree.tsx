import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { stepThreeSchemaBuilder } from "../schema/stepThree.schema";

type TProps = {
  onContinue: () => void;
  onBack: () => void;
};

export default function StepThreeForm({ onContinue, onBack }: TProps) {
  const { t } = useLanguage();
  const stepThreeSchema = stepThreeSchemaBuilder(t);
  type StepThreeFormValues = z.infer<typeof stepThreeSchema>;

  const form = useForm<StepThreeFormValues>({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: {
      carPic: undefined,
      licensePic: undefined,
      plateNumber: "",
      brand: "",
      model: "",
      year: "",
      color: "",
    },
  });

  const onSubmit = (data: StepThreeFormValues) => {
    console.log(data);
    onContinue();
  };

  return (
    <div className="max-w-md w-full space-y-6 p-4">
      <h2 className="text-lg font-semibold text-center">
        {t("signup.stepThree.header")}
      </h2>
      <p className="text-sm text-center text-muted-foreground">
        {t("signup.stepThree.text")}
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 rounded-lg border p-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
            control={form.control}
            name="carPic"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <FormLabel className="text-sm font-medium">
                  {t("signup.stepThree.carPic.label")}{" "}
                </FormLabel>
                <FormControl>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    className="hidden"
                    id="licensePic"
                  />
                </FormControl>
                <label
                  htmlFor="licensePic"
                  className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer border"
                >
                  <UploadIcon className="w-6 h-6 text-gray-500" />
                </label>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="licensePic"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <FormLabel className="text-sm font-medium">
                  {t("signup.stepThree.licensePic.label")}{" "}
                </FormLabel>
                <FormControl>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    className="hidden"
                    id="licensePic"
                  />
                </FormControl>
                <label
                  htmlFor="licensePic"
                  className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer border"
                >
                  <UploadIcon className="w-6 h-6 text-gray-500" />
                </label>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>

          {[
            {
              name: "plateNumber",
              label: t("signup.stepThree.plateNumber.label"),
              placeHolder: t("signup.stepThree.plateNumber.placeholder"),
            },
            {
              name: "brand",
              label: t("signup.stepThree.brand.label"),
              placeHolder: t("signup.stepThree.brand.placeholder"),
            },
            {
              name: "model",
              label: t("signup.stepThree.model.label"),
              placeHolder: t("signup.stepThree.model.placeholder"),
            },
            {
              name: "year",
              label: t("signup.stepThree.year.label"),
              placeHolder: t("signup.stepThree.year.placeholder"),
            },
            {
              name: "color",
              label: t("signup.stepThree.color.label"),
              placeHolder: t("signup.stepThree.color.placeholder"),
              type: "color",
            },
          ].map(({ name, label, placeHolder, type }) => (
            <FormField
              key={name}
              control={form.control}
              name={name as keyof StepThreeFormValues}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-md"
                      {...field}
                      type={type ?? "text"}
                      placeholder={placeHolder}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button
            type="submit"
            className="w-full rounded-full text-white bg-gray-700 hover:bg-gray-800"
          >
            {t("signup.stepThree.continueButton")}
          </Button>

          <Button
            type="button"
            className="w-full rounded-full text-white bg-gray-500 hover:bg-gray-600"
            onClick={onBack}
          >
            {t("signup.stepThree.backButton")}
          </Button>
        </form>
      </Form>
    </div>
  );
}
