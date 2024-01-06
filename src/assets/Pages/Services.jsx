import HideAppBar from "../Components/NavbarMUI";
import TabsServices from "../Components/Tabs";

function ServicesPage() {
  window.scrollTo(0, 0);
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
          <TabsServices/>
        </section>
        <section>
        </section>
      </main>
    </>
  );
}

export default ServicesPage;
