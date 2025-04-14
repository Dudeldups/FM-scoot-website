import styled from "styled-components";
import { media } from "../../utils/media";

export const StyledLocationsSection = styled.section`
  max-width: ${({ theme }) =>
    `calc(${theme.maxContentWidth} + 2 * ${theme.contentPadding.lg})`};
  margin-top: 7.5rem;
  margin-inline: auto;
  padding-bottom: 7.5rem;
  padding-inline: ${({ theme }) => theme.contentPadding.sm};

  ${media.min("md")`
      padding-inline: ${({ theme }) => theme.contentPadding.md};
    `}

  ${media.min("lg")`
      margin-top: 10rem;
      padding-inline: ${({ theme }) => theme.contentPadding.lg};
      padding-bottom: 10rem;
    `}
`;

export const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.min("md")`
    position: relative;
  `}

  img {
    width: 100%;
    height: auto;
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    li {
      width: 100%;
      max-width: 15rem;
      padding: 0.5rem 1rem;
      background-color: ${({ theme }) => theme.colors.lightYellow};

      ${media.min("md")`
        max-width: 7.5rem;
        background-color: ${({ theme }) => theme.colors.yellow};

        &::after {
          content: "";
          position: absolute;
          inset: auto 50% 0 50%;
          width: 1rem;
          aspect-ratio: 1;
          background-color: ${({ theme }) => theme.colors.yellow};
          transform: translate(-50%, 50%) rotate(45deg);
        }
        

        &:nth-of-type(1) {
          position: absolute;
          inset: 17.7% 72% auto auto;
        }

        &:nth-of-type(2) {
          position: absolute;
          inset: 10% 50% auto auto;
        }

        &:nth-of-type(3) {
          position: absolute;
          inset: 50% 16.5% auto auto;
        }

        &:nth-of-type(4) {
          position: absolute;
          inset: 20.8% 8.7% auto auto;
        }

        
      `}
    }

    p {
      font-family: ${({ theme }) => theme.fontFamilies.heading};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      color: ${({ theme }) => theme.colors.darkNavy};
      text-align: center;

      ${media.min("md")`
        font-size: .8125rem;
      `}
    }
  }
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 4.5rem;
  max-width: 37rem;
  margin-inline: auto;

  h2 {
    font-size: 2rem;
    letter-spacing: -0.0894rem;
    text-align: center;

    ${media.min("md")`
      font-size: 3rem;
      letter-spacing: -0.1338rem;
    `}
  }

  p {
    margin-top: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.darkNavy};

    ${media.min("lg")`
    margin-top: 0rem;
    `}
  }
`;
