import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import SplitScreenLayout from "@/layout/SplitScreenLayout";
import { CheckCircle2 } from "lucide-react";
import finishSignupSideImage from "@/assets/signup-steptwo.png";

function FinishSignup() {
  const { t } = useLanguage();

  return (
    <SplitScreenLayout imageSrc={finishSignupSideImage}>
      <div className="max-w-sm mx-auto flex flex-col items-center justify-center space-y-6 p-4 text-center">
        <CheckCircle2 className="w-30 h-30 text-green-600" />
        <div>
          <h2 className="text-xl font-bold">{t("signupUser.finishSignup.header")}</h2>
          <p className="text-sm text-muted-foreground mt-2">
            {t("signupUser.finishSignup.text_1")} <br />
          </p>
        </div>
        <Button className="w-full max-w-xs rounded-full bg-black text-white hover:bg-gray-900">
          {t("signupUser.finishSignup.continueButton")}
        </Button>
      </div>
    </SplitScreenLayout>
  );
}

export default FinishSignup;
