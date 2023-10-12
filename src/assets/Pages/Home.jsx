import Navbar from "../Components/Navbar";
import logo from "../Images/Giss-Logo.png";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero ">
          <img src={logo} alt="" />
          <h1 className="hero__title">GISS CLEANING SERVICES</h1>
          <p className="hero__paragraph">Don’t clean just call us</p>
        </section>
      </main>
    </>
  );
}

export default HomePage;
