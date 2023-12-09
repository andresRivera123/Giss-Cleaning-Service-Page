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
        <Contact/>
      </main>
    </>
  );
}
/*   <h1 className="subtitle">About us</h1>
            <p className="paragraph">
              Welcome to Giss Cleaning Service. We are a company that provides
              professional cleaning and maintenance services for homes,
              apartments, offices, etc., with the sole objective of building
              trust with the customer to meet each individual's needs, making
              them feel secure and confident in a spotlessly clean environment.
            </p>
            <p className="paragraph">
              We are a company created with the sole purpose of bringing peace
              of mind to you.
            </p>
            <p className="paragraph__bold">And how do we achieve that?</p>
            <p className="paragraph">
              We take care of maintaining and organizing your home or space so
              that you feel secure and confident.
            </p>
            <p className="paragraph__bold">And how do we offer our service?</p>
            <p className="paragraph">
              By providing a variety of services along with the best equipment
              and professional products, paying attention to small details with
              delicacy and professionalism.
            </p> */

export default AboutUsPage;
