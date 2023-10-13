import Navbar from "../Components/Navbar";
import logo from "../Images/Giss-Logo.png";
import iconInformation1 from "../Images/Icons/IconInformation1.png";
import iconInformation2 from "../Images/Icons/IconInformation2.png";
import iconInformation3 from "../Images/Icons/IconInformation3.png";
import iconInformation4 from "../Images/Icons/IconInformation4.png";
import iconInformation5 from "../Images/Icons/IconInformation5.png";
import iconInformation6 from "../Images/Icons/IconInformation6.png";

import nextIcon from "../Images/Icons/next.svg";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* -- HERO -- */}
        <section className="hero ">
          <img src={logo} alt="Background hero Giss" />
          <h1 className="hero__title">GISS CLEANING SERVICES</h1>
          <p className="hero__paragraph">Don’t clean just call us</p>
        </section>
        {/* -- INFORMATION -- */}
        <section className="information container">
          <div className="information__container">
            <article className="information__icons">
              <div className="information__icon">
                <img
                  src={iconInformation1}
                  alt="Information icon 1"
                  className="icon"
                />
                <p className="information__subtitle">Ipsum dolor.</p>
              </div>
              <div className="information__icon">
                <img
                  src={iconInformation2}
                  alt="Information icon 2"
                  className="icon"
                />
                <p className="information__subtitle">Ipsum dolor.</p>
              </div>
              <div className="information__icon">
                <img
                  src={iconInformation3}
                  alt="Information icon 3"
                  className="icon"
                />
                <p className="information__subtitle">Ipsum dolor.</p>
              </div>
              <div className="information__icon">
                <img
                  src={iconInformation4}
                  alt="Information icon 4"
                  className="icon"
                />
                <p className="information__subtitle">Ipsum dolor.</p>
              </div>
              <div className="information__icon">
                <img
                  src={iconInformation5}
                  alt="Information icon 5"
                  className="icon"
                />
                <p className="information__subtitle">Ipsum dolor.</p>
              </div>
              <div className="information__icon">
                <img
                  src={iconInformation6}
                  alt="Information icon 6"
                  className="icon"
                />
                <p className="information__subtitle">Ipsum dolor.</p>
              </div>
            </article>
            <div className="information__text">
              <h2 className="subtitle">What is GISS CLEANING SERVICES?</h2>
              <p className="paragraph">
                Somos una compañía que ofrece servicios profesionales de
                limpieza y mantenimiento para hogares, oficinas, estudios con el
                objetivo de entregar una confianza hacia el cliente y satisfacer
                las necesidades de cada uno, ofreciendo seguridad y confianza
                para que su sitio quede impecablemente limpio.
              </p>

              <a href="#" className="information__readmore transition1">
                Read more
              </a>
            </div>
          </div>
          <div className="information__video">
            <iframe
              className="information__iframe"
              width="750"
              height="600"
              src="https://www.youtube.com/embed/OqVF3aiU0VE?si=4zNjgiSY78raHOaE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
