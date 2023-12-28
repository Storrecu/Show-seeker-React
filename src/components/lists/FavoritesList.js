import { useState } from 'react';
import RenderList from './RenderLists';

const FavoritesList = ({ list, isFavourite, classType }) => {
  let [favShows, setFavShows] = useState([]);

  const handleClick = (ev) => {
    const idShow = ev.currentTarget.id;
    // console.log('list >>>>', list);
    let foundShow = list.find((item) => item.id.toString() === idShow);
    const indexFav = favShows.findIndex((item) => item.id === foundShow.id);

    if (indexFav === -1) {
      setFavShows([...favShows, foundShow]);
    } else {
      const updatedFavShows = [...favShows];
      updatedFavShows.splice(indexFav, 1);
      setFavShows(updatedFavShows);
    }
  };

  console.log('lista de favoritos', favShows);

  const handleDelete = (ev) => {
    //   const clickedItemId = ev.target.closest('.js-fav').id;
    //   if (ev.target.classList.contains('cross')) {
    //     const indexFav = favShows.findIndex(
    //       (item) => item.id === parseInt(clickedItemId)
    //     );
    //     if (indexFav !== -1) {
    //       favShows.splice(indexFav, 1);
    //       // renderFavouriteShows(favShows); // Actualiza la vista
    //     }
    //     ev.target.parentElement.remove();
    //   }
  };

  return (
    <div className="favorites">
      <h2 className="favorites-title">You favourite shows:</h2>
      <RenderList
        list={favShows}
        isFavourite={true}
        onClickCard={handleClick}
        onClickClose={handleDelete}
      />
      <button className="js-delete-fav">Erase all</button>
    </div>
  );
};

export default FavoritesList;

//list = shows
//setFavShows([...favShows, foundShow]);
