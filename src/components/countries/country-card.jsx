import { Link } from "react-router";

const CountryCard = () => {
  return (
    <div className="country-card bg-element shadow-2xl rounded-md overflow-hidden">
      <Link to={`/country/1`} className="group block">
        <div className="img-wrapper h-48 overflow-hidden">
          <img
            src="/favicon.png"
            alt={`flag`}
            className="group-hover:scale-110 transition-all duration-200"
          />
        </div>
        <div className="country-info p-5">
          <h3 className="text-[20px] font-semibold mb-3">Ukraine</h3>
          <p className="space-x-2">
            <span className="font-semibold">population:</span>
            <span className="text-input">1000</span>
          </p>
          <p className="space-x-2">
            <span className="font-semibold">region:</span>
            <span className="text-input">Europe</span>
          </p>
          <p className="space-x-2">
            <span className="font-semibold">capital:</span>
            <span className="text-input">Kyiv</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
