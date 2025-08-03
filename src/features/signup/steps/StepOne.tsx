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
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/language-context";
import { stepOneSchemaBuilder } from "../schema/stepOne.schema";

type TProps = {
  onContinue: () => void;
};

export default function StepOneForm({ onContinue }: TProps) {
  const { t } = useLanguage();
  const StepOneSchema = stepOneSchemaBuilder(t);
  type StepOneFormValues = z.infer<typeof StepOneSchema>;

  const form = useForm<StepOneFormValues>({
    resolver: zodResolver(StepOneSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      password: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: StepOneFormValues) => {
    onContinue();
  };

  return (
    <div className="max-w-md w-full space-y-6 p-4">
      <h1 className="text-2xl font-semibold text-center">Sign Up</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("signup.stepOne.username.label")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("signup.stepOne.username.placeholder")}
                    className="rounded-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("signup.stepOne.phone.label")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("signup.stepOne.phone.placeholder")}
                    className="rounded-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("signup.stepOne.email.label")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("signup.stepOne.email.placeholder")}
                    className="rounded-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("signup.stepOne.password.label")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("signup.stepOne.password.placeholder")}
                    type="password"
                    className="rounded-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-sm font-normal">
                  {t("signup.stepOne.terms.label")}
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full rounded-full text-white bg-gray-700 hover:bg-gray-800"
          >
            {t("signup.stepOne.continueButton")}
          </Button>
          <div className="text-center text-sm">
            {t("signup.stepOne.haveAccount")}{" "}
            <a href="/auth/signin" className="underline font-medium">
              {t("signup.stepOne.login")}
            </a>
          </div>
        </form>
      </Form>
    </div>
  );
}
