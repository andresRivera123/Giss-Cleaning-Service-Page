import HomePage from "../Pages/Home";
import ServicesPage from "../Pages/Services";
import AboutUsPage from "../Pages/AboutUs";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/About-Us",
    element: <AboutUsPage />,
  },
  {
    path: "/Services",
    element: <ServicesPage />,
  },
]);

export default router;
