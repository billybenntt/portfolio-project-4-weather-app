function Icon(props) {
  // eslint-disable-next-line react/prop-types
  const { url } = props;

  return (
    <div className="icon-container">
      <img src={`src/assets/${url}.svg`} alt={url} className="icon" />
    </div>
  );
}

export default Icon
