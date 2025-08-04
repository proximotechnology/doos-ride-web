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
import { forgetPasswordSchemaBuilder } from "./schemas/forgetPassword.schema";
import { useNavigate } from "react-router-dom";

function ForgetPasswordForm() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const schema = forgetPasswordSchemaBuilder(t);
  type ForgetPasswordValues = z.infer<typeof schema>;

  const form = useForm<ForgetPasswordValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      identifier: "",
    },
  });

  const onSubmit = (values: ForgetPasswordValues) => {
    console.log("Forgot password submitted:", values);
    // TODO: Call API or navigation
    navigate("/auth/account-otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold">
            {t("forgotPassword.header")}
          </h1>
          <p className="text-sm text-gray-500">{t("forgotPassword.text")} </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="identifier"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("forgotPassword.identifier.label")}</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("forgotPassword.identifier.placeholder")}
                      className="rounded-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full rounded-full bg-black text-white hover:bg-gray-900"
            >
              {t("forgotPassword.submit")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
export default ForgetPasswordForm;
