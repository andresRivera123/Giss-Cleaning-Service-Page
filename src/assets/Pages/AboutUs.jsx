import HideAppBar from "../Components/NavbarMUI";
import "../Styles/Pages/about.css";
import work1 from "../Images/Work/1.jpg";
import Contact from "../Components/Contact";

function AboutUsPage() {
  return (
    <>
      <HideAppBar />
      <main className="about container">
        <div className="aboutus__container">
          <h1 className="subtitle">About us</h1>
          <p className="paragraph">
            Welcome to Giss Cleaning Service. We are a company that provides
            professional cleaning and maintenance services for homes,
            apartments, offices, etc., with the sole objective of building trust
            with the customer to meet each individual's needs, making them feel
            secure and confident in a spotlessly clean environment.
          </p>
          {/* <div className="aboutus__img--container">
            <img
              src=""
              alt="About us image"
              className="aboutus__img"
              width="250px"
            />
          </div> */}
          <div className="aboutus__texts"></div>
        </div>
        <div className="aboutus__galery">
          
        </div>
      </main>
    </>
  );
}

export default AboutUsPage;
