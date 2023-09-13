import { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import MainRoutes from './MainRoutes';

const Routes: FC = () => {
  return useRoutes([HomeRoute, MainRoutes]);
};
export default Routes;
