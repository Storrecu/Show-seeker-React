import RenderList from './RenderLists';

const FavoritesList = ({ list, setFavShows }) => {
  // const handleDelete = (ev) => {
  //     const clickedItemId = ev.target.closest('.js-fav').id;
  //     if (ev.target.classList.contains('cross')) {
  //       const indexFav = favShows.findIndex(
  //         (item) => item.id === parseInt(clickedItemId)
  //       );
  //       if (indexFav !== -1) {
  //         favShows.splice(indexFav, 1);
  //          renderFavouriteShows(favShows); // Actualiza la vista
  //       }
  //       ev.target.parentElement.remove();
  //     }
  // };

  return (
    <div className="favorites">
      <h2 className="favorites-title">You favourite shows:</h2>
      <RenderList list={list} isFavourite={true} onClickClose={() => {}} />
      <button className="js-delete-fav">Erase all</button>
    </div>
  );
};

export default FavoritesList;
