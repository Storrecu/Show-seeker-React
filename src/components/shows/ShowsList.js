import RenderList from '../lists/RenderLists';

const ShowsList = ({ list, favShows, setFavShows }) => {
  const handleClick = (item) => {
    const isAlreadyFav = favShows.some((favItem) => favItem.id === item.id);

    if (!isAlreadyFav) {
      setFavShows([...favShows, item]);
    } else {
      setFavShows(favShows.filter((favItem) => favItem.id !== item.id));
    }
  };

  console.log('lista de favoritos', favShows);

  if (list.length === 0) {
    return <p>No matches found</p>;
  }
  console.log('lista de resultados', list);

  return (
    <>
      <h2>Results:</h2>
      <RenderList list={list} isFavourite={false} onClickCard={handleClick} />
    </>
  );
};

export default ShowsList;
