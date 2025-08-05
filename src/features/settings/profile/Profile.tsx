import editProfileSideImage from "@/assets/signup-as-side-image.png";
import SplitScreenLayout from "@/layout/SplitScreenLayout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { editProfileSchemaBuilder } from "./schemas/editProfile.schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Link } from "react-router-dom";

function Profile() {
  const { t } = useLanguage();
  const profileSchema = editProfileSchemaBuilder(t);
  type ProfileFormData = z.infer<typeof profileSchema>;

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "Emad hashem",
      country: "Emirates",
      email: "EmadHashem@hotmail.com",
    },
  });

  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: ProfileFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <SplitScreenLayout imageSrc={editProfileSideImage}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 p-4 flex flex-col justify-between"
        >
          <div className="space-y-4">
            {" "}
            <h2 className="text-lg font-semibold">{t("profile.header")}</h2>
            <Card className="p-6 ">
              {/* Profile Pic Upload */}
              <div className="flex flex-col items-center space-y-2">
                <Label htmlFor="profile-pic" className="text-sm font-medium">
                  {t("profile.profilePic.label")}
                </Label>

                <label htmlFor="profile-pic" className="cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="object-cover w-full h-full rounded-full"
                      />
                    ) : (
                      <Camera className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                </label>

                <Input
                  id="profile-pic"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("profile.name.label")}</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Country */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("profile.country.label")}</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("profile.email.label")}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Card>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Button
              type="submit"
              className="w-full rounded-full bg-black text-white hover:bg-gray-800"
            >
              {t("profile.submitButton")}
            </Button>
            <Link to={"change-password"}>
              <Button
                variant="default"
                type="button"
                className="w-full rounded-full bg-black text-white hover:bg-gray-800"
              >
                {t("profile.changePassword")}
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </SplitScreenLayout>
  );
}

export default Profile;
