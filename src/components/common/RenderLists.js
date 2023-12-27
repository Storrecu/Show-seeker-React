const RenderList = ({ list, isFavourite, classType }) => {
  return (
    <ul className="showsList">
      {list.map((item) => (
        <li key={item.id} className={classType}>
          <img className="js-card-img" src={item.image} alt={item.name} />
          <h2 className="js-card-title">{item.name}</h2>
          {isFavourite ? <span className="js-fav-cross"> X </span> : ''}
        </li>
      ))}
    </ul>
  );
};

export default RenderList;
