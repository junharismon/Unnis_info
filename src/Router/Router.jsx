import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Screen/Home";
import Layout from "../Component/Navbar/Layout";
import September2021 from "../Component/Content/September2021";
import November2021 from "../Component/Content/November2021";
import Desember2021 from "../Component/Content/Desember2021";
import October2021 from "../Component/Content/October2021";
import January2022 from "../Component/Content/January2022";
import February2022 from "../Component/Content/February2022";
import March2022 from "../Component/Content/March2022";
import April2022 from "../Component/Content/April2022";
import May2022 from "../Component/Content/May2022";
import June2022 from "../Component/Content/June2022";
import August2022 from "../Component/Content/August2022";
import September2022 from "../Component/Content/September2022";
import October2022 from "../Component/Content/October2022";
import November2022 from "../Component/Content/November2022";
import Desember2022 from "../Component/Content/Desember2022";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/*",
        element: (
          <Home>
            <Desember2022 />
          </Home>
        ),
      },
      {
        path: "/Desember2022",
        element: <Home><Desember2022 /></Home>,
      },
      {
        path: "/September2021",
        element: <Home><September2021 /></Home>,
      },
      {
        path: "/October2021",
        element: <Home><October2021 /></Home>,
      },
      {
        path: "/November2021",
        element: <Home><November2021 /></Home>,
      },
      {
        path: "/Desember2021",
        element: <Home><Desember2021 /></Home>,
      },
      {
        path: "/January2022",
        element: <Home><January2022 /></Home>,
      },
      {
        path: "/February2022",
        element: <Home><February2022 /></Home>,
      },
      {
        path: "/March2022",
        element: <Home><March2022 /></Home>,
      },
      {
        path: "/April2022",
        element: <Home><April2022 /></Home>,
      },
      {
        path: "/May2022",
        element: <Home><May2022 /></Home>,
      },
      {
        path: "/June2022",
        element: <Home><June2022 /></Home>,
      },
      {
        path: "/August2022",
        element: <Home><August2022 /></Home>,
      },
      {
        path: "/September2022",
        element: <Home><September2022 /></Home>,
      },
      {
        path: "/October2022",
        element: <Home><October2022 /></Home>,
      },
      {
        path: "/November2022",
        element: <Home><November2022 /></Home>,
      },
    ],
  },
]);

export default router;
