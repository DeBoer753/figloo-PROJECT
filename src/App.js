// REACT ROUTER:
import { Routes, Route } from 'react-router-dom';

// ROUTES: 
import Home from './routes/Home';
import Profile from './routes/Profile';
import Crypto from './routes/Crypto';
import Stocks from './routes/Stocks';
import Watchlist from './routes/Watchlist';
import RealEstate from './routes/RealEstate';
import News from './routes/News';

// COMPONENTS:
import NavBar from './components/NavBar'

// CSS:
import styles from './css/App.module.css';

// APP:
export default function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Crypto' element={<Crypto />} />
        <Route path='/Stocks' element={<Stocks />} />
        <Route path='/RealEstate' element={<RealEstate />} />
        <Route path='/Watchlist' element={<Watchlist />} />
        <Route path='/News' element={<News />} />
      </Routes>
    </div>
  );
}
