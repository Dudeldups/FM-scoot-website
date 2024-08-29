import styled from "styled-components";
import { media } from "../../utils/media";
import basePath from "../../utils/basePath";

type props = {
  $reversedArrow?: boolean;
};

export const StyledHighlightContainer = styled.div<props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  text-align: center;

  ${media.min("lg")`
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;
    text-align: left;
  `}

  &:nth-of-type(1) {
    position: relative;

    &::after {
      content: "";
      z-index: -1;
      position: absolute;
      inset: 0;
      transform: translateX(calc(100% + 4rem));
      background: ${({ theme }) => theme.colors.lightGrey};
      border-radius: 50%;
    }
  }

  &:nth-of-type(1) {
    background: pink;
    // first arrow from right

    div:nth-of-type(1)::before {
      content: url("${basePath}assets/images/patterns/left-downward-arrow.svg");
      position: absolute;
      inset: auto auto 0 0;

      ${media.min("md")`
        left: -8rem;
      `}
    }
  }

  &:nth-of-type(2) {
    // second arrow from left
    div:nth-of-type(1)::before {
      content: url("${basePath}assets/images/patterns/right-arrow.svg");
      position: absolute;
      inset: 0 50% auto auto;
      transform: translateX(4rem);

      ${media.min("md")`
        transform: translateX(-2rem);
      `}
    }

    // the second <li> has the circle on the left
    div:nth-of-type(1)::after {
      transform: translateX(calc(-100% - 3rem));
    }
  }

  &:nth-of-type(3) {
    // arrow from right
    div:nth-of-type(1)::before {
      content: url("${basePath}assets/images/patterns/left-downward-arrow.svg");
      position: absolute;
      inset: 50% 50% auto auto;
      transform: translate(95%, -105%);
    }
  }

  // uneven li are row-reversed on lg mq
  &:nth-child(odd) {
    ${media.min("lg")`
      flex-direction: row-reverse;
    `}
  }

  img {
    width: 100%;
    max-width: 27.8125rem;
    border-radius: 50%;
  }

  // second div in each li with the text
  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 35.8125rem;

    ${media.min("md")`
      gap: 2.5rem;
    `}

    ${media.min("lg")`
      align-items: flex-start;
      max-width: 29.5rem;
    `}
  }

  h3 {
    max-width: 16ch;
    font-size: 2rem;
    letter-spacing: -0.0894rem;
    color: ${({ theme }) => theme.colors.gray};

    ${media.min("md")`
      font-size: 3rem;
      letter-spacing: -0.1338rem;
    `}

    ${media.min("lg")`
      max-width: unset;
    `}
  }

  p {
    color: ${({ theme }) => theme.colors.darkNavy};
  }
`;
