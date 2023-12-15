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
import January2023 from "../Component/Content/January2023";
import February2023 from "../Component/Content/February2023";
import March2023 from "../Component/Content/March2023";
import April2023 from "../Component/Content/April2023";
import May2023 from "../Component/Content/May2023";
import June2023 from "../Component/Content/June2023";
import July2023 from "../Component/Content/July2023";
import August2023 from "../Component/Content/August2023";
import September2023 from "../Component/Content/September2023";
import October2023 from "../Component/Content/October2023";
import November2023 from "../Component/Content/November2023";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/*",
        element: (
          <Home><November2023 /></Home>
        ),
      },
      {
        path: "/November2023",
        element: <Home><November2023 /></Home>,
      },
      {
        path: "/October2023",
        element: <Home><October2023 /></Home>,
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
      {
        path: "/Desember2022",
        element: <Home><Desember2022 /></Home>,
      },
      {
        path: "/January2023",
        element: <Home><January2023 /></Home>,
      },
      {
        path: "/February2023",
        element: <Home><February2023 /></Home>,
      },
      {
        path: "/March2023",
        element: <Home><March2023 /></Home>,
      },
      {
        path: "/April2023",
        element: <Home><April2023 /></Home>,
      },
      {
        path: "/May2023",
        element: <Home><May2023 /></Home>,
      },
      {
        path: "/June2023",
        element: <Home><June2023 /></Home>,
      },
      {
        path: "/July2023",
        element: <Home><July2023 /></Home>,
      },
      {
        path: "/August2023",
        element: <Home><August2023 /></Home>,
      },
      {
        path: "/September2023",
        element: <Home><September2023 /></Home>,
      },
      
    ],
  },
]);

export default router;
