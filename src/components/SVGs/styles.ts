import styled from "styled-components";
import ScootLogo from "./ScootLogo";
import SocialIcon from "./SocialIcon";

export const StyledScootLogo = styled(ScootLogo)`
  transition: transform 0.3s ease-in-out;

  &:hover,
  &:focus-visible {
    transform: scale(1.05);
  }

  path {
    header & {
      fill: ${({ theme }) => theme.colors.darkNavy};
    }

    footer & {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const StyledSocialIcon = styled(SocialIcon)`
  width: 1.5rem;
  height: auto;

  path {
    transition: fill 0.3s;
    fill: ${({ theme }) => theme.colors.yellow};
  }
`;
