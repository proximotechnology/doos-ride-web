import { useLanguage } from "@/contexts/language-context";
import { Button } from "./ui/button";
import { Bell, Mail } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

function AuthHeaderContent() {
  const { t } = useLanguage();
  return (
    <>
      <Button
        variant={"outline"}
        className={"bg-transparent border-[#ffffff] text-[#ffffff] rounded-full"}
      >
        {t("header.auth.logout")}
      </Button>
      <div className="flex items-center gap-2">
        <Mail className="text-[#ffffff] w-5 h-4" />
        <Bell className="text-[#ffffff] w-5 h-4" />
        <Avatar className="w-8 h-8 text-white" >
          <AvatarFallback>
            UN
          </AvatarFallback>
        </Avatar>
      </div>
    </>
  );
}

export default AuthHeaderContent;
