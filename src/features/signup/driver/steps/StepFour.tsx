import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";

type StepFourProps = {
  onContinue: () => void;
};

export default function StepFour({ onContinue }: StepFourProps) {
  const { t } = useLanguage();

  return (
    <div className="max-w-sm mx-auto flex flex-col items-center justify-center space-y-6 p-4 text-center">
      <CheckCircle2 className="w-30 h-30 text-green-600" />
      <div>
        <h2 className="text-xl font-bold">{t("signup.stepFour.header")}</h2>
        <p className="text-sm text-muted-foreground mt-2">
          {t("signup.stepFour.text_1")} <br />
          {t("signup.stepFour.text_2")}
        </p>
      </div>
      <Button
        onClick={onContinue}
        className="w-full max-w-xs rounded-full bg-black text-white hover:bg-gray-900"
      >
        {t("signup.stepFour.continueButton")}
      </Button>
    </div>
  );
}
