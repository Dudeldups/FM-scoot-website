import { Link } from "react-router-dom";
import { StyledBtn } from "./styles";

type BtnProps = {
  className?: string;
  to?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const Btn = ({ className, to, disabled, onClick, children }: BtnProps) => {
  if (to) {
    return (
      <StyledBtn as={Link} className={className} to={to} onClick={onClick}>
        {children}
      </StyledBtn>
    );
  } else {
    return (
      <StyledBtn className={className} onClick={onClick} disabled={disabled}>
        {children}
      </StyledBtn>
    );
  }
};

export default Btn;
