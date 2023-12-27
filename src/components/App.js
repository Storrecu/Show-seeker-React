import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import callToApi from '../services/callToApi';
import Landing from '../Landing';
import Header from './common/Header';
import AppInfo from './AppInfo';
import ShowsList from './shows/ShowsList';
import Footer from './common/Footer';
import NotFoundPage from './NotFoundPage';
import SearchShow from './search/SearchShow';
import FavoritesList from './lists/FavoritesList';
import '../styles/App.scss';

const App = () => {
  // States
  let [shows, setShows] = useState([]);
  let [favShows, setFavShows] = useState([]);
  let [searchedShows, setSearchedShows] = useState([]);

  // Effects
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await callToApi();
        setShows(result);
      } catch (error) {
        console.error('Error en useEffect:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className="main-section">
        <header>
          <Header />
        </header>
        <section className="info-section">
          <AppInfo />
        </section>
        <section className="search-section">
          <SearchShow />
        </section>
        <section className="favorites-section">
          <FavoritesList
            list={favShows}
            isFavourite={true}
            classType={'js-fav'}
          />
        </section>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/shows"
            element={
              <ShowsList
                list={shows}
                isFavourite={false}
                classType={'js-card'}
              />
            }
          />
          <Route path="/notfound" element={<NotFoundPage />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default App;
