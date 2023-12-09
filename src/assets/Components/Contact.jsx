import contactLocation from "../Images/Icons/LocationIcon.png";
import contactPhone from "../Images/Icons/PhoneIcon.png";
import contactEmail from "../Images/Icons/EmailIcon.png";
import contactFacebook from "../Images/Icons/FacebookIcon.png";
import contactInstagram from "../Images/Icons/InstagramIcon.png";
import contactWhatssap from "../Images/Icons/WhatsappIcon.png";
import { Link } from "react-router-dom";

export default function Contact() {
  const handleCallClick = () => {
    window.location.href = `tel:19735733532`;
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:gisscleaningservices@gmail.com";
  };

  const handleClickWhatssap = () => {
    const message = encodeURIComponent("Hi Giss! :)");
    const phoneNumber = "19735733532";
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <section id="contact" className="contact container">
      <div className="contact__information">
        <h1 className="subtitle">Contact us</h1>
        <p className="paragraph contact__paragraph">
          Contact us, and our team will be delighted to provide you with a quote
          tailored to your specific needs. Let's talk!"
        </p>
        <article className="contact__container">
          <div className="contact__section">
            <div className="contact__text" onClick={handleCallClick}>
              <img
                src={contactPhone}
                alt="Service icon 1"
                className="contact__icon"
              />
              <h2 className="basictitle">Phone:</h2>
            </div>
            <p className="paragraph">+0019735733532</p>
          </div>
          <div className="contact__section">
            <div className="contact__text" onClick={handleEmailClick}>
              <img
                src={contactEmail}
                alt="Service icon 1"
                className="contact__icon"
              />
              <h2 className="basictitle">Email:</h2>
            </div>
            <p className="paragraph">gisscleaningservices@gmail.com</p>
          </div>
          <div className="contact__section">
            <div className="contact__text">
              <img
                src={contactLocation}
                alt="Service icon 1"
                className="contact__icon"
              />
              <h2 className="basictitle">Address:</h2>
            </div>
            <p className="paragraph">122 124 chestnut st newark NJ 07105</p>
          </div>
          <div className="contact__social">
            <h2 className="basictitle">Find us on:</h2>
            <div className="contact__text">
              <div className="contact__find">
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={contactFacebook}
                    alt="Facebook icon link"
                    className="contact__icon-follow"
                  />
                </Link>
                <Link href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src={contactInstagram}
                    alt="Instagram icon link"
                    className="contact__icon-follow"
                  />
                </Link>
                <Link>
                  <img
                    src={contactWhatssap}
                    alt="Whatssap icon link"
                    className="contact__icon-follow"
                    onClick={handleClickWhatssap}
                  />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
