const RenderList = ({ list, isFavourite, onClickCard, onClickClose }) => {
  const ulClass = isFavourite ? 'favList' : 'showsList';
  const liClass = isFavourite ? 'js-fav' : 'js-card';

  //evento para hacer click en el LI
  const handleClickCard = (item) => {
    console.log('item', item);
    onClickCard(item);
    console.log('se ha hecho click en el <li>');
  };

  //evento para hacer click en la X
  const handleClickCross = (item) => {
    onClickClose(item);
    console.log('se ha hecho click en la X');
  };

  return (
    <ul className={ulClass}>
      {list.map((item) => (
        <li
          key={item.id}
          className={liClass}
          onClick={() => handleClickCard(item)}
        >
          <img className="img" src={item.image} alt={item.name} />
          <h4 className="title">{item.name}</h4>
          {isFavourite ? (
            <span className="cross" onClick={() => handleClickCross(item)}>
              X
            </span>
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
  );
};

export default RenderList;
