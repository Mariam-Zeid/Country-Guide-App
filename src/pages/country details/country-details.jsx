import { useEffect, useState } from "react";
import BackButton from "../../components/ui/back-button";
import FlagImg from "./components/flag-img";
import CountryInfo from "./components/country-info";
import BorderCountries from "./components/border-countries";
import { useParams } from "react-router-dom";
import { getCountry } from "../../apis/countries";
import Loading from "../../components/loading/loading";

const CountryDetails = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const { countryName } = useParams();

  
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await getCountry(countryName);
        setCountry(res.data[0]);
      } catch (error) {
        console.log(error);
        setErrMsg(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountry();
  }, [countryName]);

  console.log(country);

  if (errMsg) return <h1>{errMsg}</h1>;

  return isLoading ? (
    <Loading height="80vh" />
  ) : (
    <div className="country-details">
      <BackButton />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <FlagImg flags={country.flags}/>
        <div className="flex-1 text-sm">
          <CountryInfo country={country}/>
          <BorderCountries borders={country?.borders}/>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
