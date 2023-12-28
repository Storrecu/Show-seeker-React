const RenderList = ({ list, isFavourite, classType, classTypeLi, onClick }) => {
  //evento para hacer click en el LI
  const handleClickCard = (ev) => {
    ev.preventDefault();
    // onClick(ev);
    console.log('se ha hecho click en el <li>');
  };

  //evento para hacer click en la X
  const handleClickCross = (ev) => {
    onClick(ev);
  };

  return (
    <ul className={classType}>
      {list.map((item) => (
        <li key={item.id} className={classTypeLi} onClick={handleClickCard}>
          <img className="img" src={item.image} alt={item.name} />
          <h4 className="title">{item.name}</h4>
          {isFavourite ? (
            <span className="cross" onClick={handleClickCross}>
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
