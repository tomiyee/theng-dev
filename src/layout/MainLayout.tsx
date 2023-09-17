import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import Footer from './Footer';

const MainLayout: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
