import ModalQuote from "../Components/ModalQuote";
import HideAppBar from "../Components/NavbarMUI";
import SwiperImage from "../Components/SwiperImage";
import "../Styles/Pages/about.css";

function AboutUsPage() {
  window.scrollTo(0, 0);
  return (
    <>
      <HideAppBar />
      <main className="about container">
        <section className="aboutus__container">
          <h2 className="subtitle">About us</h2>
          <p className="paragraph">
            Welcome to Giss Cleaning Service. We are a company that provides
            professional cleaning and maintenance services for homes,
            apartments, offices, etc., with the sole objective of building trust
            with the customer to meet each individual&#39;s needs, making them
            feel secure and confident in a spotlessly clean environment.
          </p>
        </section>

        <section className="aboutus__information">
            <SwiperImage />
          <div className="aboutus__process">
            <p className="paragraph">
              We have designed a simple, customer-centric process to ensure that
              you receive top-notch cleaning services with ease and confidence:
            </p>
            <li className="paragraph__bold">
              Clear and Detailed Estimates:
              
            </li>
            <span className="paragraph">
                Start by requesting a quote through our website form or by
                giving us a call. We provide personalized and detailed estimates
                for our cleaning services. You will receive a breakdown of
                costs, including optional add-ons, so you know exactly what to
                expect.
              </span>
              <div className="service__quote">
          <p className="paragraph__bold">
            Curious about the cost? Get your free quote now!
          </p>
          <ModalQuote />
        </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutUsPage;
