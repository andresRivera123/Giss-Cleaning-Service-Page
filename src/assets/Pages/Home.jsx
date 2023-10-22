import Navbar from "../Components/Navbar";
import logo from "../Images/Giss-Logo.png";
import serviceIcon1 from "../Images/Icons/ServiceIcon1.png"
import serviceIcon2 from "../Images/Icons/ServiceIcon2.png"
import serviceIcon3 from "../Images/Icons/ServiceIcon3.png"
import flag from "../Images/Icons/flagIcon.png"


function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* -- HERO -- */}
        <section className="hero ">
          {/*  <img src={logo} alt="Background hero Giss" /> */}
          <h1 className="hero__title">Dont’t clean just call us</h1>
          <p className="hero__paragraph">Limpieza de hogares y oficinas a domicilio en New Jersey</p>
          <button className="quote__button">Get a free quote</button>
        </section>
        {/* -- INFORMATION -- */}
        <section className="information">
          <article className="service__icons container">
            <div className="service__icon">
              <img
                src={serviceIcon1}
                alt="Service icon 1"
                className="icon"
              />
              <h2 className="basictitle">Limpieza personalizada</h2>
              <p className="paragraph  aligncenter">Obtén una limpieza personalizada para tu hogar u oficina.</p>
            </div>
            <div className="service__icon">
              <img
                src={serviceIcon2}
                alt="Service icon 2"
                className="icon"
              />
              <h2 className="basictitle">Servicios Profesionales</h2>
              <p className="paragraph  aligncenter">Nuestros servicios profesionales garantizan una limpieza minuciosa y de alta calidad.</p>
            </div>
            <div className="service__icon">
              <img
                src={serviceIcon3}
                alt="Service icon 3"
                className="icon"
              />
              <h2 className="basictitle">Comunicación facil</h2>
              <p className="paragraph  aligncenter">Mantente en contacto con nuestro equipo y recibe información de los servicios y cotización.</p>
            </div>
          </article>
          {/* KNOWLEDGE */}
          <section className="knowledge">
            <div className="knowledge__container container">
              <h2 className="subtitle">Nuestros servicios de limpieza de hogar</h2>
              <div className="knowledge__services">


              </div>

            </div>

          </section>
          <div className="service__container container">
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
