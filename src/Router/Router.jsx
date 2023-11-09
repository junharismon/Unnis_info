import { createBrowserRouter } from 'react-router-dom';
import Home from '../Component/Screen/Home';
import Layout from '../Component/Navbar/Layout';
import September2021 from '../Component/Content/September2021';
import November2021 from '../Component/Content/November2021';
import Desember2021 from '../Component/Content/Desember2021';
import October2021 from '../Component/Content/October2021';
import January2022 from '../Component/Content/January2022';
import February2022 from '../Component/Content/February2022';
import March2022 from '../Component/Content/March2022';
import April2022 from '../Component/Content/April2022';
import May2022 from '../Component/Content/May2022';
import June2022 from '../Component/Content/June2022';
import August2022 from '../Component/Content/August2022';
import September2022 from '../Component/Content/September2022';
import October2022 from '../Component/Content/October2022';
import November2022 from '../Component/Content/November2022';
import Desember2022 from '../Component/Content/Desember2022';
import January2023 from '../Component/Content/January2023';
import February2023 from '../Component/Content/February2023';
import April2023 from '../Component/Content/April2023';
import May2023 from '../Component/Content/May2023';
import June2023 from '../Component/Content/June2023';
import July2023 from '../Component/Content/July2023';
import August2023 from '../Component/Content/August2023';
import September2023 from '../Component/Content/September2023';
import October2023 from '../Component/Content/October2023';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        children: [
          {
            path: '/September2021',
            element: <September2021/>
          },
          {
            path: '/October2021',
            element: <October2021/>
          },
          {
            path: '/November2021',
            element: <November2021/>
          },
          {
            path: '/Desember2021',
            element: <Desember2021/>
          },
          {
            path: '/January2022',
            element: <January2022/>
          },
          {
            path: '/February2022',
            element: <February2022/>
          },
          {
            path: '/March2022',
            element: <March2022/>
          },
          {
            path: '/April2022',
            element: <April2022/>
          },
          {
            path: '/May2022',
            element: <May2022/>
          },
          {
            path: '/June2022',
            element: <June2022/>
          },
          {
            path: '/August2022',
            element: <August2022/>
          },
          {
            path: '/September2022',
            element: <September2022/>
          },
          {
            path: '/October2022',
            element: <October2022/>
          },
          {
            path: '/November2022',
            element: <November2022/>
          },
          {
            path: '/Desember2022',
            element: <Desember2022/>
          },
          {
            path: '/January2023',
            element: <January2023/>
          },
          {
            path: '/February2023',
            element: <February2023/>
          },
          {
            path: '/April2023',
            element: <April2023/>
          },
          {
            path: '/May2023',
            element: <May2023/>
          },
          {
            path: '/June2023',
            element: <June2023/>
          },
          {
            path: '/July2023',
            element: <July2023/>
          },
          {
            path: '/August2023',
            element: <August2023/>
          },
          {
            path: '/September2023',
            element: <September2023/>
          },
          {
            path: '/October2023',
            element: <October2023/>
          },
        ]
      },
    ],
  },
]);

export default router;