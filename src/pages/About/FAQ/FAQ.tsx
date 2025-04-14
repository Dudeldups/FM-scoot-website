import { StyledFAQSection } from "./styles";

const FAQ = () => {
  return (
    <StyledFAQSection>
      <h2>FAQs</h2>
      <article>
        <h3>How it works</h3>
        <ul>
          <li>
            <details name="group-a" open>
              <summary>
                <strong>How do I download the app?</strong>
              </summary>
              <p>
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </p>
            </details>
          </li>
          <li>
            <details name="group-a">
              <summary>
                <strong>Can I find a nearby Scoots?</strong>
              </summary>
              <p>
                Definitely! Simply open up the app and allow us to find your
                location while using it. We'll show you all of the closest
                Scoots and some extra useful information.
              </p>
            </details>
          </li>
          <li>
            <details name="group-a">
              <summary>
                <strong>Do I need a license to ride?</strong>
              </summary>
              <p>
                Yup! We provide information inside the app regarding local laws
                and the license you need to be able to ride our Scoots.
              </p>
            </details>
          </li>
        </ul>
      </article>

      <article>
        <h3>Safe driving</h3>
        <ul>
          <li>
            <details name="group-b" open>
              <summary>
                <strong>Should I wear a helmet?</strong>
              </summary>
              <p>
                Yes, please do! All cities have different laws. But we strongly
                strongly strongly recommend always wearing a helmet regardless
                of the local laws. We like you and we want you to be as safe as
                possible while Scooting.
              </p>
            </details>
          </li>
          <li>
            <details name="group-b">
              <summary>
                <strong>How about the rules & regulations?</strong>
              </summary>
              <p>
                Now is not the time to be a rule breaker. Be sure you're
                complying with all local laws and regulations. Also, just be a
                good human being. Be sure not to park your Scoot where it can
                block access to buildings or get in people's way.
              </p>
            </details>
          </li>
          <li>
            <details name="group-b">
              <summary>
                <strong>What if I damage my Scoot?</strong>
              </summary>
              <p>
                Be sure to read our terms and conditions carefully. Not the most
                fun job we know but we make it as clear as possible. There's an
                option to add insurance for each trip, or you can sign up for
                annual insurance if you're a regular Scooter.
              </p>
            </details>
          </li>
        </ul>
      </article>
    </StyledFAQSection>
  );
};

export default FAQ;
