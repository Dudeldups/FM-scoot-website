import { StyledHamburgerButton } from "./styles";

type HamburgerButtonProps = {
  className?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerButton = ({
  className,
  isOpen,
  setIsOpen,
}: HamburgerButtonProps) => {
  return (
    <StyledHamburgerButton
      className={className}
      aria-controls="navigation"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(prev => !prev)}>
      <span></span>
      <span></span>
      <span></span>
      <span className="sr-only">
        {isOpen ? "Close navigation" : "Open navigation"}
      </span>
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
