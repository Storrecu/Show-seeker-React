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

  // función para actualizar el estado de shows que almacena la respuesta de la API en función de la palabra por defecto o de lo que escribe el usuario
  const handleSearchResults = async (searchTerm) => {
    try {
      const result = await callToApi(searchTerm);
      setShows(result);
    } catch (error) {
      console.error('Error en la búsqueda:', error);
    }
  };

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
          <SearchShow onSearchResults={handleSearchResults} />
        </section>
        <section className="favorites-section">
          <FavoritesList list={shows} isFavourite={true} classType={'js-fav'} />
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
