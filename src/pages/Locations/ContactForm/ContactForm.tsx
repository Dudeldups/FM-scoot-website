import { useEffect, useState } from "react";
import { StyledForm, StyledFormContainer, StyledWrapper } from "./styles";
import Btn from "../../../components/Btn/Btn";
import { CloseImg } from "../../../assets/images";

type ContactFormProps = {
  setIsContactFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContactForm = ({ setIsContactFormOpen }: ContactFormProps) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 1500);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsContactFormOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsContactFormOpen]);

  return (
    <StyledWrapper onClick={() => setIsContactFormOpen(false)}>
      <StyledFormContainer onClick={e => e.stopPropagation()}>
        <button aria-label="close" onClick={() => setIsContactFormOpen(false)}>
          <img src={CloseImg} alt="" width={24} height={24} />
        </button>

        <hgroup>
          <h2>Contact Us</h2>
          <p>
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us here or on social.
          </p>
        </hgroup>

        <StyledForm onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={isSending}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isSending}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              disabled={isSending}></textarea>
          </div>

          {isSent && <p>Thanks for the feedback!</p>}

          {!isSent ? (
            <Btn disabled={isSending || isSent}>
              {isSending ? "Sending..." : isSent ? "Sent!" : "Send"}
            </Btn>
          ) : (
            <Btn onClick={() => setIsContactFormOpen(false)}>Close</Btn>
          )}
        </StyledForm>
      </StyledFormContainer>
    </StyledWrapper>
  );
};

export default ContactForm;
