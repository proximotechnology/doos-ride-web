import { Outlet } from "react-router";
import { useLanguage } from "@/contexts/language-context";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function AppLayout() {
  const { dir } = useLanguage();

  return (
    <div
      className={`min-h-screen flex flex-col bg-black ${
        dir === "rtl" ? "font-arabic" : "font-sans"
      }`}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
