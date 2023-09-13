import MainLayout from '../layout';
import Archives from '../views/Archives';
import Foundry from '../views/Foundry';
import Page404 from '../views/Page404';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/projects',
      element: <Archives />,
    },
    {
      path: '/foundry',
      element: <Foundry />,
    },
    {
      path: '*',
      element: <Page404 />,
    },
  ],
};
export default MainRoutes;
