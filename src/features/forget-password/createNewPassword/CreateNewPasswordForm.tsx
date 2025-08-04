import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { createNewPasswordSchemaBuilder } from "../schemas/createNewPassword.schema";

export default function CreateNewPasswordForm() {
  const { t } = useLanguage();
  const schema = createNewPasswordSchemaBuilder(t);
  type CreatePasswordValues = z.infer<typeof schema>;

  const form = useForm<CreatePasswordValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: CreatePasswordValues) => {
    console.log("Password changed:", data);
    // TODO: send to backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">
            {t("resetPassword.header")}
          </h1>
          <p className="text-sm text-gray-500">{t("resetPassword.text")} </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* New Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("resetPassword.newPassword.label")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder={t("resetPassword.newPassword.placeholder")}
                      className="rounded-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("resetPassword.confirmPassword.label")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder={t(
                        "resetPassword.confirmPassword.placeholder"
                      )}
                      className="rounded-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-full bg-black text-white hover:bg-gray-900"
            >
              {t("resetPassword.submit")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
