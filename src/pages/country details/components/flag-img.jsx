const FlagImg = ({ flags }) => {
  return (
    <div className="flag-wrapper">
      <img
        src={flags?.png || flags?.svg}
        alt={flags?.alt}
        className="rounded"
      />
    </div>
  );
};

export default FlagImg;
