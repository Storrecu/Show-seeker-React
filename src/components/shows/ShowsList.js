import RenderList from '../lists/RenderLists';

const ShowsList = ({ list, isFavourite, classType }) => {
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
        classType={'showsList'}
        classTypeLi={'js-card'}
      />
    </>
  );
};

export default ShowsList;
