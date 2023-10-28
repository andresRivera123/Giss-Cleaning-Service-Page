import contactLocation from "../Images/Icons/LocationIcon.png";
import contactPhone from "../Images/Icons/PhoneIcon.png";
import contactEmail from "../Images/Icons/EmailIcon.png";
import contactFollow from "../Images/Icons/FollowIcon.png";
import contactFacebook from "../Images/Icons/FacebookIcon.png";
import contactInstagram from "../Images/Icons/InstagramIcon.png";
import contactWhatssap from "../Images/Icons/WhatsappIcon.png";


export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <div className="contact__information">
        <h1 className="subtitle">Contact us</h1>
        <article className="contact__container">
          <div className="contact__section">
            <div className="contact__text">
              <img
                src={contactPhone}
                alt="Service icon 1"
                className="contact__icon"
              />
              <h2 className="basictitle">Phone:</h2>
            </div>
            <p className="paragraph">+1 987 62 52 87</p>
          </div>
          <div className="contact__section">
            <div className="contact__text">
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
            <p className="paragraph">
            USA, New Jersey, 5 Park Avenue East 12 str, 74 office
          </p>
          </div>
          <div className="contact__section">
          <h2 className="basictitle">Find us on:</h2>
            <div className="contact__text">
              
              <div className="contact__find">
              <img
                  src={contactFacebook}
                  alt="Service icon 1"
                  className="contact__icon-follow"
              />
               <img
                  src={contactInstagram}
                  alt="Service icon 1"
                  className="contact__icon-follow"
              />
               <img
                  src={contactWhatssap}
                  alt="Service icon 1"
                  className="contact__icon-follow"
              />
              </div>
            </div>

          </div>
        </article>
      </div>
    </section>
  );
}
