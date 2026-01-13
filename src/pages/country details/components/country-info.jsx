const CountryInfo = ({ country }) => {
  const nativeName =
    country?.name?.nativeName &&
    Object.values(country.name.nativeName)[0]?.common;

  const currencies =
    country?.currencies && Object.values(country.currencies)[0].name;

  const languages = Object.values(country.languages).join(", ");

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {country.name.common}
      </h2>

      <div className="grid grid-cols-2 gap-8 mb-8">
        {/* Column 1 */}
        <ul className="space-y-2 capitalize">
          <li>
            <strong>Native Name:</strong> {nativeName}
          </li>
          <li>
            <strong>Population:</strong> {country.population}
          </li>
          <li>
            <strong>Region:</strong> {country.region}
          </li>
          <li>
            <strong>Sub Region:</strong> {country.subregion || country.region}
          </li>
          <li>
            <strong>Capital:</strong> {country.capital}
          </li>
        </ul>

        {/* Column 2 */}
        <ul className="space-y-2 capitalize">
          <li>
            <strong>Top Level Domain:</strong> {country.tld}
          </li>
          <li>
            <strong>Currencies:</strong> {currencies}
          </li>
          <li>
            <strong>Languages:</strong> {languages}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CountryInfo;
