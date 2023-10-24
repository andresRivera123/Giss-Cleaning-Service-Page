import HomePage from "../Pages/Home";
import ServicesPage from "../Pages/Services";
import AboutUsPage from "../Pages/AboutUs";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Giss-Cleaning-Service-Page/",
    element: <HomePage />,
  },
  {
    path: "/Giss-Cleaning-Service-Page/About-Us",
    element: <AboutUsPage />,
  },
  {
    path: "/Giss-Cleaning-Service-Page/Services",
    element: <ServicesPage />,
  },
]);

export default router;
