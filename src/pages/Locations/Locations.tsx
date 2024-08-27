import HeroSection from "../../components/HeroSection/HeroSection";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Locations = () => {
  useDocumentTitle();

  return (
    <div>
      <HeroSection site="locations" />
    </div>
  );
};

export default Locations;
