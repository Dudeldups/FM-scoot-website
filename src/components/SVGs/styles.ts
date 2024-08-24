import styled from "styled-components";
import ScootLogo from "./ScootLogo";
import SocialIcon from "./SocialIcon";

export const StyledScootLogo = styled(ScootLogo)`
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
    fill: ${({ theme }) => theme.colors.yellow};
  }
`;
