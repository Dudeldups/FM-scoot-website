import styled from "styled-components";
import { media } from "../../utils/media";

type StyledHamburgerButtonProps = {
  $isOpen: boolean;
};

export const StyledHamburgerButton = styled.button<StyledHamburgerButtonProps>`
  position: fixed;
  right: ${({ theme }) => theme.contentPadding.sm};
  width: 2rem;
  height: 1.75rem;
  padding: 0.25rem;
  background: ${({ theme }) => theme.colors.yellow};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 10px;
  overflow: hidden;
  z-index: 100;

  ${media.min("md")`
    display: none;
  `}

  span {
    display: block;
    width: 100%;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.white};
    transition: transform 0.3s ease-in-out;

    &:nth-child(2) {
      transition-delay: 0.25s;
      margin-block: 0.25rem;
    }
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    span:nth-child(1) {
      transition-delay: 0.25s;
      transform: translateY(0.5rem) rotate(45deg);
    }

    span:nth-child(2) {
      transition-delay: 0s;
      transform: translateX(120%);
    }

    span:nth-child(3) {
      transition-delay: 0.25s;
      transform: translateY(-0.5rem) rotate(-45deg);
    }
  `}
`;
