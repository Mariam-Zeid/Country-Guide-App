import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import BackButton from "../../components/ui/back-button";
import FlagImg from "./components/flag-img";
import CountryInfo from "./components/country-info";
import BorderCountries from "./components/border-countries";

const CountryDetails = () => {
  return (
    <div className="country-details">
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FlagImg />
        <div className="flex-1 text-sm">
          <CountryInfo />
          <BorderCountries />
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
