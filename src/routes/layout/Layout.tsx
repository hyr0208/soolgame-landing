import { Fragment, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";

function Layout() {
  const location = useLocation();
  const isNewsPage = location.pathname === "/news";
  const [showHeader, setShowHeader] = useState(isNewsPage);

  useEffect(() => {
    if (isNewsPage) {
      setShowHeader(true);
      return;
    }

    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setShowHeader(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNewsPage]);

  return (
    <Fragment>
      <Header show={showHeader} />
      <main className="w-full">
        <Outlet />
      </main>
    </Fragment>
  );
}

export default Layout;
