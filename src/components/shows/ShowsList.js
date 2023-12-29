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

  //se toma la lista que App le pasa por props y se ordena de forma alfabética. Una vez ordenado se almacena en una nueva variable y este será la lista que recibirá RenderList.
  // const orderedShowList = [...list].sort();

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

// const idShow = ev.target.id;
// // console.log('list >>>>', list);
// let foundShow = list.find((item) => item.id === idShow);
// const indexFav = favShows.findIndex((item) => item.id === foundShow.id);

// if (indexFav === -1) {
//   setFavShows([...favShows, foundShow]);
// } else {
// const updatedFavShows = [...favShows];
// updatedFavShows.splice(indexFav, 1);
// setFavShows(updatedFavShows);
// }

// const handleClick = (ev) => {
//   console.log('ev>>>>> ', ev);
//   const idShow = ev.target.id;
//   const foundShow = list.find((item) => item.id === idShow);
//   const isAlreadyFav = favShows.some((favItem) => favItem.id === idShow);
//   console.log('foundShow>>>>> ', foundShow);

//   if (!isAlreadyFav) {
//     setFavShows([...favShows, foundShow]);
//   } else {
//     setFavShows(favShows.filter((favItem) => favItem.id !== idShow));
//   }
// };
