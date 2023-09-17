import { Banner } from '../layout/Banner';
import MainLayout from '../layout';
import Home from '../views/Home';

const HomeRoute = {
  path: '/',
  element: (
    <>
      <Banner />
      <MainLayout />
    </>
  ),
  children: [
    {
      path: '/',
      element: <Home />,
    },
  ],
};
export default HomeRoute;
