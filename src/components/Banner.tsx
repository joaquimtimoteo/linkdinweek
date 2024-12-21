import React from "react";

interface BannerProps {
  message: string;
  linkText: string;
  linkHref: string;
}

export const Banner: React.FC<BannerProps> = ({ message, linkText, linkHref }) => {
  return (
    <section
      className="py-3 text-center bg-gradient-to-r from-pink-200 via-cyan-200 to-yellow-200"
      aria-label="Promotional Banner"
    >
      <div className="px-4">
        <p className="font-medium">
          <span className="hidden sm:inline">{message} - </span>
          <a
            href={linkHref}
            className="underline underline-offset-4 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={`Link to ${linkText}`}
          >
            {linkText}
          </a>
        </p>
      </div>
    </section>
  );
};
