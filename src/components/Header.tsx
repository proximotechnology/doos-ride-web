import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import AppLogo from "./AppLogo";
import NoAuthHeaderContent from "./NoAuthHeaderContent";
import AuthHeaderContent from "./AuthHeaderContent";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

export default function Header() {
  const { language, setLanguage, t, dir } = useLanguage();

  return (
    <div className="bg-[#000000] w-full">
      <div
        className={cn("flex items-center justify-between px-4 md:px-8 py-4")}
      >
        {/* Logo */}
        <div>
          <AppLogo className="h-20 w-32 md:h-25 md:w-40" />
        </div>

        {/* Desktop content */}
        <div className="hidden md:flex items-center gap-4">
          <NoAuthHeaderContent />
          <AuthHeaderContent />

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-[#ffffff] px-3 py-2 bg-transparent"
              >
                <span className="text-sm font-medium">
                  {language === "ar" ? "العربية (AR)" : "English (EN)"}
                </span>
                <Globe className="w-4 h-4" />
                <ChevronDown className="w-3 h-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#ffffff] border border-gray-200"
            >
              <DropdownMenuItem
                onClick={() => setLanguage("en")}
                className="cursor-pointer hover:bg-gray-100"
              >
                English (EN)
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("ar")}
                className="cursor-pointer hover:bg-gray-100"
              >
                العربية (AR)
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side={dir === "rtl" ? "left" : "right"}
              className="bg-black text-white w-72 p-6"
            >
              <div className="space-y-4 p-4">
                <div className="flex items-center justify-center gap-2">
                  <NoAuthHeaderContent />
                  <AuthHeaderContent />
                </div>

                <Separator className="my-4 border-gray-700" />
                <div className="pt-4 border-t border-gray-700">
                  <div className="text-sm font-semibold mb-2">
                    {t("sidebar.language")}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full justify-between text-white border-white bg-transparent"
                    onClick={() => setLanguage("en")}
                  >
                    English (EN)
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-between text-white border-white mt-2 bg-transparent"
                    onClick={() => setLanguage("ar")}
                  >
                    العربية (AR)
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
