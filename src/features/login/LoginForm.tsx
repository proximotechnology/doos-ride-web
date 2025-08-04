import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import googleIcon from "@/assets/Google - Logo.png";
import facebookIcon from "@/assets/Facebook - Logo.png";

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
import { useLanguage } from "@/contexts/language-context";
import { loginSchemaBuilder } from "./schemas/login.schema";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useLanguage();

  const signInSchema = loginSchemaBuilder(t);
  type SignInFormValues = z.infer<typeof signInSchema>;

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: SignInFormValues) => {
    console.log("Form values:", values);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <h2 className="text-center text-2xl font-semibold">
          {t("login.header")}
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("login.email.label")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t("login.email.placeholder")}
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
                <FormItem className="relative">
                  <FormLabel>{t("login.password.label")}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        {...field}
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-2.5 text-gray-500"
                        tabIndex={-1}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="text-right text-sm text-muted-foreground">
              <Link to="/auth/forget-password" className="hover:underline">
                {t("login.forgotPassword")}
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-gray-700 hover:bg-gray-800 text-white"
            >
              {t("login.submitButton")}
            </Button>
          </form>
        </Form>

        <div className="flex items-center gap-2">
          <hr className="flex-1 border-muted" />
          <span className="text-sm text-muted-foreground">{t("login.or")}</span>
          <hr className="flex-1 border-muted" />
        </div>

        <Button variant="outline" className="w-full flex items-center gap-2">
          {t("login.loginWithGoogle")}
          <img src={googleIcon} className="w-5 h-5" />
        </Button>

        <Button variant="outline" className="w-full flex items-center gap-2">
          {t("login.loginWithFacebook")}
          <img src={facebookIcon} className="w-5 h-5" />
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          {t("login.noAccount")}
          <Link to="/auth/signup-as" className="font-medium text-black hover:underline">
            {t("login.signup")}
          </Link>
        </p>
      </div>
    </div>
  );
}
