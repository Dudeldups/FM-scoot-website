import { StyledFeatureSection } from "./styles";

type FeatureSectionProps = {
  className?: string;
  children?: React.ReactNode;
};

const FeatureSection = ({ className, children }: FeatureSectionProps) => {
  return (
    <StyledFeatureSection className={className}>
      {children}
    </StyledFeatureSection>
  );
};

export default FeatureSection;
