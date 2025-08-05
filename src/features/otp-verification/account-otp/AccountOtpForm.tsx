import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

type TProps = {
  onSubmit?: (code: string) => void;
  onResend?: () => void;
  identifier?: string;
};

function AccountOtpForm({ identifier, onSubmit, onResend }: TProps) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const { t, dir } = useLanguage();
  const navigate = useNavigate();

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // allow only single digit
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    console.log("Submitted OTP:", code);
    // Add your submit logic here
    onSubmit?.(code);
    // Optionally clear the OTP after submission
    setOtp(["", "", "", ""]);
    inputsRef.current.forEach((input) => input?.blur()); // Remove focus from inputs
  };

  const handleResend = () => {
    console.log("Resend code logic here");
    onResend?.();
    // Optionally clear the OTP after resend
    setOtp(["", "", "", ""]);
    inputsRef.current.forEach((input) => input?.blur()); // Remove focus from inputs
  };

  return (
    <div className="max-w-sm mx-auto px-4 py-10 space-y-6">
      <h1 className="text-xl font-semibold text-center">
        {t("accountOtp.header")}
      </h1>

      <div className="text-center text-sm space-y-1">
        <p className="font-medium">{t("accountOtp.text")}</p>
        <p className="text-muted-foreground">
          {t("accountOtp.text_2", {
            identifier: identifier || t("accountOtp.identifierBackup"),
          })}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div
          className={cn(
            "flex justify-center gap-3",
            dir === "rtl" && "flex-row-reverse"
          )}
        >
          {otp.map((digit, index) => (
            <Input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              className="w-12 h-12 text-center text-xl font-semibold border border-black rounded-full"
            />
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            className="text-sm underline text-muted-foreground"
            onClick={handleResend}
          >
            {t("accountOtp.resend")}{" "}
          </button>
        </div>

        <Button
          type="submit"
          className="w-full rounded-full bg-black hover:bg-gray-900 text-white"
        >
          {t("accountOtp.submit")}
        </Button>
      </form>
    </div>
  );
}

export default AccountOtpForm;
