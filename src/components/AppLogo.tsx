import appLogoImg from "@/assets/doos-doos-ride-logo.svg";
import { cn } from "@/lib/utils";

type TProps = {
  className?: string;
};

function AppLogo({ className }: TProps) {
  return (
    <img src={appLogoImg} alt="logo" className={cn("w-10 h-10", className)} />
  );
}

export default AppLogo;
