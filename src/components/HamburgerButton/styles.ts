import styled from "styled-components";
import { media } from "../../utils/media";

type StyledHamburgerButtonProps = {
  $isOpen: boolean;
};

export const StyledHamburgerButton = styled.button<StyledHamburgerButtonProps>`
  position: absolute;
  right: ${({ theme }) => theme.contentPadding.xs};
  width: 2rem;
  height: 1.75rem;
  padding: 0.25rem;
  background: transparent;
  box-shadow: rgba(0, 0, 0, 0.425) 0px 2px 10px;
  overflow: hidden;

  ${media.min("md")`
    display: none;
  `}

  span {
    display: block;
    width: 100%;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.yellow};
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
