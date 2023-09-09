import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';
import Home from './views/Home';
import Archives from './views/Archives';
import Page404 from './views/Page404';
import { useEffect } from 'react';

const App: React.FC = () => {
  const homePaths = ['/', '/home', '/theng-dev'];
  return (
    <div className="App">
      {/* Only show the Banner if we are on the home screen */}
      <Routes>
        {homePaths.map((p) => (
          <Route path={p} element={<Banner />} key={p}/>
        ))}
      </Routes>
      {/* The navigation bar */}
      <Navbar />
      {/* The content of the page, which may change depending on the path */}
      <Routes>
        {homePaths.map((p) => (
          <Route path={p} element={<Home />} key={p}/>
        ))}
        <Route path="archives" element={<Archives />} />
        <Route path="foundry" element={<Foundry />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

const Foundry: React.FC = () => {
  useEffect(() => {
    window.location.href = 'http://129.158.244.128:30000/';
  });
  return null;
};
