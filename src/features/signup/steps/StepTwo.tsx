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
import { stepTwoSchemaBuilder } from "../schema/stepTwo.schema";
import { useLanguage } from "@/contexts/language-context";
import DatePickerField from "@/components/DatePickerField";

type TProps = {
  onContinue: () => void;
  onBack: () => void;
};

export default function StepTwoForm({ onContinue, onBack }: TProps) {
  const { t } = useLanguage();
  const stepTwoSchema = stepTwoSchemaBuilder(t);
  type StepTwoFormValues = z.infer<typeof stepTwoSchema>;

  const form = useForm<StepTwoFormValues>({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      profilePic: undefined,
      firstName: "",
      lastName: "",
      dob: undefined,
      address: "",
      address2: "",
      zip: "",
      city: "",
      country: "",
      nationalId: "",
    },
  });

  const onSubmit = (data: StepTwoFormValues) => {
    console.log(data);
    onContinue();
  };

  return (
    <div className="max-w-md w-full space-y-6 p-4">
      <h2 className="text-lg font-semibold text-center">
        {t("signup.stepTwo.header")}
      </h2>
      <p className="text-sm text-center text-muted-foreground">
        {t("signup.stepTwo.text")}
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="profilePic"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center">
                <FormLabel>{t("signup.stepTwo.profilePic.label")}</FormLabel>
                <FormControl>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    className="hidden"
                    id="profilePic"
                  />
                </FormControl>
                <label
                  htmlFor="profilePic"
                  className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer border"
                >
                  <UploadIcon className="w-6 h-6 text-gray-500" />
                </label>
                <FormMessage />
              </FormItem>
            )}
          />

          {[
            {
              name: "firstName",
              label: t("signup.stepTwo.firstName.label"),
              placeHolder: t("signup.stepTwo.firstName.placeholder"),
            },
            {
              name: "lastName",
              label: t("signup.stepTwo.lastName.label"),
              placeHolder: t("signup.stepTwo.lastName.placeholder"),
            },
            {
              name: "address",
              label: t("signup.stepTwo.address.label"),
              placeHolder: t("signup.stepTwo.address.placeholder"),
            },
            {
              name: "address2",
              label: t("signup.stepTwo.address2.label"),
              placeHolder: t("signup.stepTwo.address2.placeholder"),
            },
            {
              name: "zip",
              label: t("signup.stepTwo.zip.label"),
              placeHolder: t("signup.stepTwo.zip.placeholder"),
            },
            {
              name: "city",
              label: t("signup.stepTwo.city.label"),
              placeHolder: t("signup.stepTwo.city.placeholder"),
            },
            {
              name: "country",
              label: t("signup.stepTwo.country.label"),
              placeHolder: t("signup.stepTwo.country.placeholder"),
            },
            {
              name: "nationalId",
              label: t("signup.stepTwo.nationalId.label"),
              placeHolder: t("signup.stepTwo.nationalId.placeholder"),
            },
          ].map(({ name, label, placeHolder }) => (
            <FormField
              key={name}
              control={form.control}
              name={name as keyof StepTwoFormValues}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{label}</FormLabel>
                  <FormControl>
                    <Input
                      type={"text"}
                      placeholder={placeHolder}
                      className="rounded-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <DatePickerField
            name="dob"
            label={t("signup.stepTwo.dob.label")}
            control={form.control}
          />

          <Button
            type="submit"
            className="w-full rounded-full text-white bg-gray-700 hover:bg-gray-800"
          >
            {t("signup.stepTwo.continueButton")}
          </Button>
          <Button
            type="button"
            className="w-full rounded-full text-white bg-gray-700 hover:bg-gray-800"
            onClick={onBack}
          >
            {t("signup.stepTwo.backButton")}
          </Button>
        </form>
      </Form>
    </div>
  );
}
