import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HideAppBar from "../Components/NavbarMUI";
import TabsServices from "../Components/Tabs";

function ServicesPage() {
  return (
    <>
      <HideAppBar/>
      <main>
        <section className="services container">
          <div className="services__title">
            <h2 className="subtitle">
              Descubre Nuestro Servicios de Limpieza: Del Presupuesto A La
              Satisfacción...
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
