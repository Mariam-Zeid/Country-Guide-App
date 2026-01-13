const CountryInfo = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 capitalize">Egypt</h2>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Column 1 */}
        <ul className="space-y-2 capitalize">
          <li>
            <strong>Native Name:</strong> Egypt
          </li>
          <li>
            <strong>Population:</strong> 200
          </li>
          <li>
            <strong>Region:</strong> Africa
          </li>
          <li>
            <strong>Sub Region:</strong> Middle East
          </li>
          <li>
            <strong>Capital:</strong> Cairo
          </li>
        </ul>

        {/* Column 2 */}
        <ul className="space-y-2 capitalize">
          <li>
            <strong>Top Level Domain:</strong> .eg
          </li>
          <li>
            <strong>Currencies:</strong> Egyptian Pound
          </li>
          <li>
            <strong>Languages:</strong> Arabic
          </li>
        </ul>
      </div>
    </>
  );
};

export default CountryInfo;
