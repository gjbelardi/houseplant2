import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Plant,
  SinglePageError,
} from "./pages"; //all pages imported
import { loader as landingLoader } from "./pages/Landing";
import { loader as singlePagedLoader } from "./pages/Plant";
import { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  //each {} is a page
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      //nested pages- all relative to home route
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "plant/:id",
        errorElement: <SinglePageError />,
        loader: singlePagedLoader,
        element: <Plant />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
//each route is going to be an object

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
