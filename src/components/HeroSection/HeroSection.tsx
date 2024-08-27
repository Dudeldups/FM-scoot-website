import {
  DesktopAboutHeroImg,
  DesktopCareersLocationHeroImg,
  MobileAboutHeroImg,
  MobileCareersLocationHeroImg,
  TabletAboutHeroImg,
  TabletCareersLocationHeroImg,
} from "../../assets/images";
import { theme } from "../../styles/theme";
import { StyledHeroSection } from "./styles";

type HeroSectionProps = {
  className?: string;
  site: "about" | "careers" | "locations";
};

const HeroSection = ({ className, site }: HeroSectionProps) => {
  const mobileImgSource =
    site === "about" ? MobileAboutHeroImg : MobileCareersLocationHeroImg;
  const tabletImgSource =
    site === "about" ? TabletAboutHeroImg : TabletCareersLocationHeroImg;
  const desktopImgSource =
    site === "about" ? DesktopAboutHeroImg : DesktopCareersLocationHeroImg;
  const capitalizedSiteName = site.charAt(0).toUpperCase() + site.slice(1);

  return (
    <StyledHeroSection className={className}>
      <picture>
        <source
          srcSet={desktopImgSource}
          media={`(min-width: ${theme.breakpoints.lg}px)`}
        />
        <source
          srcSet={tabletImgSource}
          media={`(min-width: ${theme.breakpoints.md}px)`}
        />
        <img src={mobileImgSource} alt="" height="160" width="375" />
      </picture>
      <h1>{capitalizedSiteName}</h1>
    </StyledHeroSection>
  );
};

export default HeroSection;
