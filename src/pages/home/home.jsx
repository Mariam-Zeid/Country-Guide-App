import { useEffect, useState } from "react";
import CountriesWrapper from "../../components/countries/countires-wrapper";
import CountryCard from "../../components/countries/country-card";
import Filteration from "../../components/filteration/filteration";
import Pagination from "../../components/pagination/pagination";
import {
  getAllCountries,
  getCountry,
  getRegionCountries,
} from "../../apis/countries";
import Loading from "../../components/loading/loading";
import useDebounce from "../../hooks/useDebounce";
import usePagination from "../../hooks/usePagination";

const Home = () => {
  const [filter, setFilter] = useState({
    search: "",
    region: "",
  });
  const [countries, setCountries] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errMsg, setErrMsg] = useState("");

  const {
    currentPage,
    totalPages,
    currentData: currentCountries,
    nextPage,
    prevPage,
    goToPage,
    resetPage,
  } = usePagination(countries || [], 12);


  const debouncedSearch = useDebounce(filter.search, 500);

  useEffect(() => {
    const fetchCountires = async () => {
      try {
        let res;
        setIsLoading(true);
        setErrMsg("");

        if (debouncedSearch) {
          res = await getCountry(debouncedSearch);
          let filteredCountries = res.data;
          if (filter.region) {
            filteredCountries = filteredCountries.filter(
              (country) =>
                country.region.toLowerCase() === filter.region.toLowerCase()
            );
          }
          setCountries(filteredCountries);
          if (filteredCountries.length === 0) setErrMsg("No countries found");
          return;
        } else if (filter.region) {
          res = await getRegionCountries(filter.region);
          setCountries(res.data);
          return;
        } else {
          res = await getAllCountries();
          setCountries(res.data);
          return;
        }
      } catch (error) {
        console.log(error);
        setErrMsg(error.response.data.message);
        setCountries(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountires();
    resetPage();
  }, [debouncedSearch, filter.region]);

  return (
    <>
      <Filteration filter={filter} setFilter={setFilter} />
      {isLoading && <Loading height="50vh" />}
      {errMsg && (
        <h1 className="text-red-700 text-3xl p-3 rounded-2xl">{errMsg}</h1>
      )}
      {!isLoading && countries && currentCountries.length !== 0 && (
        <>
          <CountriesWrapper>
            {currentCountries?.map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </CountriesWrapper>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            nextPage={nextPage}
            prevPage={prevPage}
            goToPage={goToPage}
          />
        </>
      )}
    </>
  );
};

export default Home;
