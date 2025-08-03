import React from "react";

interface SplitScreenLayoutProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt?: string;
}

const SplitScreenLayout: React.FC<SplitScreenLayoutProps> = ({
  children,
  imageSrc,
  imageAlt = "Background image",
}) => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row">
      {/* Left side (form) */}
      <div className="relative z-10 w-full md:w-1/2 lg:w-2/5 bg-white flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Right side (image) on tablets & up */}
      <div className="hidden md:block md:w-1/2 lg:w-3/5 relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SplitScreenLayout;
