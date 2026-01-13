import { Link } from "react-router";

const CountryCard = ({ country }) => {
  if (!country) return null;
  return (
    <div className="country-card bg-element shadow-2xl rounded-md overflow-hidden">
      <Link to={`/country/${country.name.common}`} className="group block">
        <div className="img-wrapper h-52 overflow-hidden">
          <img
            src={country.flags.png || country.flags.svg}
            alt={country.flags.alt}
            className="w-full h-full group-hover:scale-110 transition-all duration-200"
          />
        </div>
        <div className="country-info p-5">
          <h3 className="text-[20px] font-semibold mb-3">{country.name.common}</h3>
          <p className="space-x-2">
            <span className="font-semibold">population:</span>
            <span className="text-input">{country.population}</span>
          </p>
          <p className="space-x-2">
            <span className="font-semibold">region:</span>
            <span className="text-input">{country.region}</span>
          </p>
          <p className="space-x-2">
            <span className="font-semibold">capital:</span>
            <span className="text-input">{country.capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
