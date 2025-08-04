import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/language-context";
import { signupUserSchemaBuilder } from "./schemas/signupUser.schema";

export default function SignupUserForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useLanguage();
  const signUpUserSchema = signupUserSchemaBuilder(t);
  type SignUpFormValues = z.infer<typeof signUpUserSchema>;
  const navigate = useNavigate();


  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpUserSchema),
    defaultValues: {
      username: "",
      phone: "",
      email: "",
      password: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form Data", data);
    // Submit logic here
    navigate("/user/auth/phone-otp");
  };

  return (
    <div className="max-w-md w-full mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-center">
        {t("signupUser.header")}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("signupUser.username.label")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("signupUser.username.placeholder")}
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
                <FormLabel>{t("signupUser.phone.label")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("signupUser.phone.placeholder")}
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
                <FormLabel>{t("signupUser.email.label")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("signupUser.email.placeholder")}
                    className="rounded-full"
                    type="email"
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
                <FormLabel>{t("signupUser.password.label")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder={t("signupUser.password.placeholder")}
                      type={showPassword ? "text" : "password"}
                      className="rounded-full pr-10"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-gray-500" />
                      ) : (
                        <Eye className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                  </div>
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
                    id="agreeToTerms"
                  />
                </FormControl>
                <FormLabel
                  htmlFor="agreeToTerms"
                  className="text-sm font-normal"
                >
                  {t("signupUser.terms")}
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full rounded-full bg-gray-700 hover:bg-gray-800 text-white"
          >
            {t("signupUser.submit")}
          </Button>

          <p className="text-sm text-center">
            {t("signupUser.haveAccount")}
            <Link to="/auth/login" className="font-medium underline">
              {t("signupUser.login")}
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}
