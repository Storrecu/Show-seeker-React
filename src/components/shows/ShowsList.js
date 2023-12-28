import RenderList from '../lists/RenderLists';

const ShowsList = ({ list }) => {
  console.log();
  const orderedShowList = list.sort();

  if (orderedShowList.length === 0) {
    return <p>No matches found</p>;
  }
  console.log('list', list);

  return (
    <>
      <h2>Results:</h2>
      <RenderList
        list={orderedShowList}
        isFavourite={false}
        onClickCard={() => console.log('añadir a favoritos')}
      />
    </>
  );
};

export default ShowsList;
