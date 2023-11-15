import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HideAppBar from "../Components/NavbarMUI";
import TabsServices from "../Components/Tabs";

function ServicesPage() {
  return (
    <>
      <HideAppBar />
      <main>
        <section className="services container">
          <div className="services__title">
            <h2 className="subtitle">
              Discover Our Cleaning Services: From Quote To Satisfaction...
            </h2>
          </div>
          <TabsServices />
        </section>
        <section>
          <Contact />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default ServicesPage;
