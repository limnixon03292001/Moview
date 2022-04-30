import './App.css'
import React,{ useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import {QueryClientProvider, QueryClient} from 'react-query'
import Home from './components/MovieDetail/Homepage/Home';
import Sidenav from './components/MovieDetail/Navbar/Sidenav/Sidenav';
import MovieDetail from './components/MovieDetail/MovieDetail/MovieDetail';
import TopNavbar from './components/MovieDetail/Navbar/TopNavbar/TopNavbar';
import TvShows from './components/MovieDetail/Tv-Shows/TvShows';
import TvShowsDetails from './components/MovieDetail/TvShowDetails/TvShowsDetails';
import ScrollButton from './components/MovieDetail/ScrollButton/ScrollButton';
import NotFound from './components/MovieDetail/404/NotFound';

const queryClient = new QueryClient();

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className='font-fontNunito w-full bg-[#F4F4F4] dark:bg-[#1F2933] overflow-auto transition-colors duration-100 antialiased'>
        <TopNavbar setIsOpen={setIsOpen} />
        <Sidenav isOpen={isOpen} setIsOpen={setIsOpen} />
        <div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:id' element={<MovieDetail />}/>
            <Route path='/tv-shows' element={<TvShows />}/>
            <Route path='/tv-show/:id' element={<TvShowsDetails />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
        <ScrollButton/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
