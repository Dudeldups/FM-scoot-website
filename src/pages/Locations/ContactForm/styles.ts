import styled from "styled-components";
import { media } from "../../../utils/media";

export const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  padding-block: 2rem;
`;

export const StyledFormContainer = styled.div`
  position: relative;
  overflow-y: auto;
  max-width: 40rem;
  max-height: 100vh;
  padding-block: 5rem;
  padding-inline: ${({ theme }) => theme.contentPadding.sm};
  background-color: ${({ theme }) => theme.colors.white};

  button[aria-label="close"] {
    position: absolute;
    top: 1rem;
    right: ${({ theme }) => theme.contentPadding.sm};
    background-color: transparent;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.darkNavy};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.md};

    ${media.min("sm")`
        font-size: ${({ theme }) => theme.fontSizes.lg};
      `}
  }

  p {
    margin-top: 0.75rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-top: 2rem;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    color: ${({ theme }) => theme.colors.darkGray};
  }

  input,
  textarea {
    padding: 1rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    color: ${({ theme }) => theme.colors.darkNavy};
  }

  textarea {
    min-height: 10rem;
    resize: none;
  }

  .error {
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    font-size: 0.9em;
    color: red;
  }
`;
