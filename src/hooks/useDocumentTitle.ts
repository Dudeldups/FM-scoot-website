import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDocumentTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = "Home | Scoot";

    if (/^\/about/.test(pathname)) {
      title = "About Us | Scoot";
    } else if (/^\/careers/.test(pathname)) {
      title = "Careers | Scoot";
    } else if (/^\/location/.test(pathname)) {
      title = "Our Locations | Scoot";
    }

    document.title = title;
  }, [pathname]);
};

export default useDocumentTitle;
