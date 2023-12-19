import { Outlet, useNavigation } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  const location = useLocation();
  const pageClass =
    location.pathname === "/newsletter" || location.pathname === "/about"
      ? "page pageBG"
      : "page";
  // console.log("LOCATION", pageClass);
  const navigation = useNavigation();
  // console.log(navigation);
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Navbar />
      <section className={pageClass}>
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;

//this layout is shared across all the children pages
