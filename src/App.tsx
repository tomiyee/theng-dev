import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { Banner } from './components/Banner';
import Home from './views/Home';
import { Archives } from './views/Archives';
import Page404 from './views/Page404';

const App: React.FC = () => {
  const homePaths = ['/', '/home', '/theng-dev'];
  return (
    <div className="App">
      {/* Only show the Banner if we are on the home screen */}
      <Routes>
        {homePaths.map((p, i) => (
          <Route key={`route-${i}`} path={p} element={<Banner />} />
        ))}
      </Routes>
      {/* The navigation bar */}
      <Navbar />
      {/* The content of the page, which may change depending on the path */}
      <Routes>
        {homePaths.map((p, i) => (
          <Route key={`routes-${i}`} path={p} element={<Home />} />
        ))}
        <Route path="archives" element={<Archives />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
