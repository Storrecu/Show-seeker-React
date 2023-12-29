import RenderList from './RenderLists';

const FavoritesList = ({ list, setList }) => {
  const handleClose = (item) => {
    const updatedList = list.filter((favItem) => favItem.id !== item.id);
    setList(updatedList);
  };

  const handleEraseAll = () => {
    setList([]);
  };

  return (
    <div className="favorites">
      <h2 className="favorites-title">You favourite shows:</h2>
      <RenderList
        list={list}
        isFavourite={true}
        onClickCard={() => {}}
        onClickClose={handleClose}
      />
      <button onClick={handleEraseAll} className="js-delete-fav">
        Erase all
      </button>
    </div>
  );
};

export default FavoritesList;
