import RenderList from './RenderLists';

const FavoritesList = ({ list, isFavourite, classType }) => {
  return (
    <div className="favorites">
      <h2 className="favorites-title">You favourite shows:</h2>
      <ul className="js-fav-list">
        <RenderList list={list} isFavourite={true} classType={'js-fav'} />
      </ul>
      <button className="js-delete-fav">Erase all</button>
    </div>
  );
};

export default FavoritesList;
