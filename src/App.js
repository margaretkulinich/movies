import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/Header/Header';
import { Movies } from './components/Movies/Movies';
import { TVShows } from './components/TVShows/TVShows';
import { SearchPage } from './components/SearchPage/SearchPage';
import { MostPopular } from './components/MostPopular/MostPopular';
import { ScrollTopArrow } from './components/ScrollTopArrow/ScrollTopArrow';

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path='/search/:searchValue' element={<SearchPage />} />
          <Route exact path='/search/' element={<SearchPage />} />
          <Route path='/' element={<MostPopular />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tvshows' element={<TVShows />} />
        </Routes>
      </div>

      <footer className='footer'>&copy; 2022 by Marharyta Kulinich</footer>
      <ScrollTopArrow />
    </Router>
  );
}

export default App;
