import React from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  show: boolean;
}

function Header({ show }: HeaderProps) {
  const location = useLocation();
  const isNewsPage = location.pathname === "/news";

  const scrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = `/${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${
        isNewsPage
          ? "bg-white/90 border-gray-200"
          : "bg-black/90 border-gray-800"
      } ${
        show || isNewsPage
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="max-w-full mx-auto px-20 py-6 flex items-center justify-between">
        <Link
          to="/"
          onClick={scrollToTop}
          className={`text-2xl font-black tracking-tight hover:opacity-80 transition-opacity ${
            isNewsPage ? "text-black" : "text-white"
          }`}
        >
          SOOLGAME
        </Link>
        <nav className="hidden md:flex gap-12 font-extrabold">
          <Link
            to="/news"
            className={`transition-colors ${
              isNewsPage
                ? "text-black hover:text-gray-600"
                : "text-white hover:text-gray-300"
            }`}
          >
            새소식
          </Link>
          {/* <a
            href="#games"
            className={`transition-colors ${
              isNewsPage
                ? "text-black hover:text-gray-600"
                : "text-white hover:text-gray-300"
            }`}
            onClick={(e) => handleNavClick(e, "#games")}
          >
            콘텐츠
          </a> */}
          <a
            href="#download"
            className={`transition-colors ${
              isNewsPage
                ? "text-black hover:text-gray-600"
                : "text-white hover:text-gray-300"
            }`}
            onClick={(e) => handleNavClick(e, "#download")}
          >
            게임소개
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
