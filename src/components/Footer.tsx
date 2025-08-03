import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram } from "lucide-react";
import AppLogo from "./AppLogo";
import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-black text-white py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div className="relative h-40">
            <AppLogo className="w-60 h-40 absolute md:-top-[50px] -left-[20px] " />
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t("footer.pages_header")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {[
                  "Home",
                  "Book a ride now",
                  "Reserve For Later",
                  "About",
                  "Privacy",
                ].map((page, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block hover:text-gray-300 transition-colors"
                  >
                    {page}
                  </a>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Privacy Policy",
                  "Terms and conditions",
                  "Contact Us",
                  "Join the Support Team",
                ].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="block hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t("footer.locations_header")}
            </h3>
            <div className="space-y-4">
              {["UAE (EN)", "LBP (EN)"].map((location, i) => (
                <a
                  key={i}
                  href="#"
                  className="block hover:text-gray-300 transition-colors"
                >
                  {location}
                </a>
              ))}
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {t("footer.subscribe_header")}
            </h3>
            <div className="space-y-6">
              {/* Email Form */}
              <div className="relative flex items-center bg-white rounded-full p-1">
                <Input
                  type="email"
                  placeholder={t("footer.subscribe_placeholder")}
                  className="flex-1 border-none bg-transparent px-6 py-4 text-gray-700 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full"
                />
                <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full font-medium">
                  {t("footer.subscribe_button")}
                </Button>
              </div>

              {/* Social Media */}
              <div className="flex gap-4">
                {[<Facebook />, <Twitter />, <Instagram />].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:text-gray-300 transition-colors"
                  >
                    {icon}
                  </a>
                ))}
                <a href="#" className="hover:text-gray-300 transition-colors">
                  {/* Google Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </a>
              </div>

              {/* App Stores */}
              <div className="flex flex-wrap gap-3">
                {/* Google Play */}
                <a href="#" className="block">
                  <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-black text-xs">
                      <div className="text-[10px]">GET IT ON</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>

                {/* App Store */}
                <a href="#" className="block">
                  <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    <div className="text-black text-xs">
                      <div className="text-[10px]">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm">&copy; {t("footer.copyright")}</div>
            <div className="flex gap-6 text-sm">
              {["Terms", "Privacy", "Cookies"].map((text, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-gray-300 transition-colors"
                >
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
