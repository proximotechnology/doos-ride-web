import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

export default function SelectRole() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 px-4">
      <h1 className="text-2xl font-semibold text-center">
        {t("signupAs.header")}
      </h1>

      <div className="w-full max-w-xs space-y-4">
        <Button
          className="w-full rounded-full bg-black text-white hover:bg-gray-900"
          onClick={() => navigate("/driver/auth/signup")}
        >
          {t("signupAs.driver")}
        </Button>
        <Button
          className="w-full rounded-full bg-black text-white hover:bg-gray-900"
          onClick={() => navigate("/user/auth/signup")}
        >
          {t("signupAs.user")}
        </Button>
      </div>
    </div>
  );
}
