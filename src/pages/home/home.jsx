import CountriesWrapper from "../../components/countries/countires-wrapper";
import CountryCard from "../../components/countries/country-card";
import Filteration from "../../components/filteration/filteration";
import Pagination from "../../components/pagination/pagination";

const Home = () => {
  return (
    <>
      <Filteration />
      <CountriesWrapper>
        <CountryCard />
      </CountriesWrapper>
      <Pagination />
    </>
  );
};

export default Home;
