import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';
import { Home } from './views/Home';
import { Page404 } from './views/Page404';

function App() {
  const homePaths = ['/', '/home', '/theng-dev']
  return (
    <div className="App">
        {/* Only show the Banner if we are on the home screen */}
        <Routes>
          {homePaths.map(p => 
            <Route exact path={p} element={<Banner/>}/>
          )}
        </Routes>
        {/* The navigation bar */}
        <Navbar/>
        {/* The content of the page, which may change depending on the path */}
        <Routes>
          {homePaths.map(p => 
            <Route exact path={p} element={<Home/>}/>
          )}
          <Route exact path='*' element={<Page404/>} />
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;
