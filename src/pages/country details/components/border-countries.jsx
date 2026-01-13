const BorderCountries = ({ borders }) => {
  console.log(borders);
  return (
    <div className="flex flex-wrap items-center gap-2">
      <strong>Border Countries:</strong>

      <div className="flex flex-wrap gap-2">
        {borders ? (
          borders.map((border) => (
            <p
              key={border}
              className="bg-element px-4 py-1 shadow text-sm rounded"
            >
              {border}
            </p>
          ))
        ) : (
          <p className="bg-element px-4 py-1 shadow text-sm rounded">
            No borders
          </p>
        )}
      </div>
    </div>
  );
};

export default BorderCountries;
