import { FC } from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home: FC = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <main>
        <div>Hello World</div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
