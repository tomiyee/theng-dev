import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Home } from './views/Home';
import { Page404 } from './views/Page404';

function App() {
  return (
    <div className="App">
        {/* Only show the Title Intro if we are on the home screen */}
        <Routes>
          <Route exact path='/home' element={<Banner/>}/>
        </Routes>
        <Navbar/>
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='*' element={<Page404/>} />
        </Routes>
    </div>
  );
}

export default App;
