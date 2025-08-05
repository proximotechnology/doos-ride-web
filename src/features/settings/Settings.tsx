import profileSettingsSideImage from "@/assets/profile-settings-side-image.png";
import SplitScreenLayout from "@/layout/SplitScreenLayout";
import { Card } from "@/components/ui/card";
import {
  User,
  CreditCard,
  History,
  Gift,
  MessageCircle,
  Info,
  LogOut,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { Link } from "react-router-dom";
import type { TranslationKey } from "@/lib/types/translation";

const settings = (
  t: (key: TranslationKey, _?: Record<string, string | number>) => string
) => [
  {
    label: t("settings.profile"),
    icon: <User className="h-4 w-4" />,

    link: "/user/settings/profile",
  },
  {
    label: t("settings.paymentMethod"),
    icon: <CreditCard className="h-4 w-4" />,
    link: "/user/settings/payment-method",
  },
  {
    label: t("settings.history"),
    icon: <History className="h-4 w-4" />,
    link: "/user/settings/history",
  },
  {
    label: t("settings.promoCodes"),
    icon: <Gift className="h-4 w-4" />,
    link: "/user/settings/promo-codes",
  },
  {
    label: t("settings.liveSupport"),
    icon: <MessageCircle className="h-4 w-4" />,
    link: "/user/settings/live-support",
  },
  {
    label: t("settings.about"),
    icon: <Info className="h-4 w-4" />,
    link: "/user/settings/about",
  },
  {
    label: t("settings.logOut"),
    icon: <LogOut className="h-4 w-4" />,
    link: "/auth/login",
  },
];

function Settings() {
  const { t, dir } = useLanguage();

  return (
    <SplitScreenLayout imageSrc={profileSettingsSideImage}>
      <div className="max-w-md mx-auto py-8 px-4 space-y-4">
        <h1 className="text-2xl font-semibold">{t("settings.header")}</h1>

        <div className="space-y-3">
          {settings(t).map((item, index) => (
            <Card key={index} className="p-0 hover:bg-gray-50" >
              <Link
                className="flex flex-row items-center justify-between px-4 py-3  cursor-pointer"
                to={item.link}
                key={index}
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {dir === "ltr" ? (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronLeft className="h-4 w-4 text-muted-foreground" />
                )}
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </SplitScreenLayout>
  );
}

export default Settings;
