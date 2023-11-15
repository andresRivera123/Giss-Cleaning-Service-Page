import Navbar from "../Components/Navbar";
import SwiperExample from "../Components/Swiper";
import serviceIcon1 from "../Images/Icons/ServiceIcon1.png";
import serviceIcon2 from "../Images/Icons/ServiceIcon2.png";
import serviceIcon3 from "../Images/Icons/ServiceIcon3.png";

import { Link } from "react-router-dom";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import HideAppBar from "../Components/NavbarMUI";
import ModalQuote from "../Components/ModalQuote";
var width = screen.width;
function HomePage() {
  return (
    <>
      <HideAppBar />
      <main>
        {/* -- HERO -- */}
        <section className="hero ">
          {/*  <img src={logo} alt="Background hero Giss" /> */}
          <p className="hero__title">Dont’t clean just call us</p>
          <h1 className="hero__paragraph">
            Home and office cleaning in New Jersey
          </h1>
          <ModalQuote />
        </section>
        {/* -- INFORMATION -- */}
        <section className="  ">
          <article className="service__icons container">
            <div className="service__icon">
              <img src={serviceIcon1} alt="Service icon 1" className="icon" />
              <h2 className="basictitle">Customized Cleaning</h2>
              <p className="paragraph aligncenter">
                Get customized cleaning for your home or office.
              </p>
            </div>
            <div className="service__icon">
              <img src={serviceIcon2} alt="Service icon 2" className="icon" />
              <h2 className="basictitle">Professional Services</h2>
              <p className="paragraph aligncenter">
                Our professional services ensure thorough and high-quality
                cleaning.
              </p>
            </div>
            <div className="service__icon">
              <img src={serviceIcon3} alt="Service icon 3" className="icon" />
              <h2 className="basictitle">Easy Communication</h2>
              <p className="paragraph aligncenter">
                Stay in touch with our team and receive information about
                services and quotes.
              </p>
            </div>
          </article>
          {/* KNOWLEDGE */}
          <section className="knowledge">
            <div className="knowledge__container container">
              <h1 className="subtitle">Our cleaning services</h1>
              <SwiperExample />
              <div className="knowledge__services"></div>
            </div>
          </section>
          <section className="information container">
            <div className="information__read ">
              <h1 className="subtitle">What is GISS CLEANING SERVICES?</h1>
              <p className="information__text paragraph">
                We are a company that offers professional cleaning and
                maintenance services for homes, offices, studios with the aim of
                delivering a confidence to the customer and meet the needs of
                each one, offering security and confidence that your site is
                impeccably clean.
              </p>
              <Link
                to="/Giss-Cleaning-Service-Page/about-us"
                className="information__readmore transition1"
              >
                Read more
              </Link>
            </div>
            <div className="information__video">
              <iframe
                className="information__iframe"
                width="1100"
                height="400"
                src="https://www.youtube.com/embed/OqVF3aiU0VE?si=4zNjgiSY78raHOaE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </section>
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default HomePage;
