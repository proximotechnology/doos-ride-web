import { useLanguage } from "@/contexts/language-context";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function NoAuthHeaderContent() {
  const { t } = useLanguage();

  return (
    <>
      <Button
        variant="outline"
        className="bg-transparent border-[#ffffff] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#000000] rounded-full md:px-8 py-2"
      >
        <Link to={"/auth/login"}>{t("header.noAuth.login")}</Link>
      </Button>

      <Button
        
        className="bg-[#ffffff] text-[#000000] hover:bg-gray-100 rounded-full md:px-8 py-2"
      >
        <Link to={"/auth/signup-as"}>{t("header.noAuth.signup")}</Link>
      </Button>
    </>
  );
}

export default NoAuthHeaderContent;
