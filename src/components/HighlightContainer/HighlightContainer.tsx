import { StyledHighlightContainer } from "./styles";

type HighlightContainerProps = {
  className?: string;
  children: React.ReactNode;
  reversedArrow?: boolean;
  as?: keyof JSX.IntrinsicElements;
};

const HighlightContainer = ({
  className,
  children,
  reversedArrow,
  as,
}: HighlightContainerProps) => {
  return (
    <StyledHighlightContainer
      className={className}
      $reversedArrow={reversedArrow}
      as={as}>
      {children}
    </StyledHighlightContainer>
  );
};

export default HighlightContainer;
