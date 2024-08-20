import styled from "styled-components";
import { media } from "../../utils/media";

export const StyledHamburgerButton = styled.button`
  position: absolute;
  right: 1.5rem;
  width: 2rem;
  height: 1.75rem;
  padding: 0.25rem;
  background: ${({ theme }) => theme.colors.gray};
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

  &.open span {
    &:nth-child(1) {
      transition-delay: 0.25s;
      transform: translateY(0.5rem) rotate(45deg);
    }

    &:nth-child(2) {
      transition-delay: 0s;
      transform: translateX(120%);
    }

    &:nth-child(3) {
      transition-delay: 0.25s;
      transform: translateY(-0.5rem) rotate(-45deg);
    }
  }
`;
