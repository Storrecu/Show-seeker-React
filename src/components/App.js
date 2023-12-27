import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import callToApi from '../services/callToApi';
import Landing from '../Landing';
import Header from './common/Header';
import Footer from './common/Footer';
import ShowsList from './shows/ShowsList';
import NotFoundPage from './NotFoundPage';
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

  return (
    <>
      <main className="main">
        <header>
          <Header />
        </header>
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
