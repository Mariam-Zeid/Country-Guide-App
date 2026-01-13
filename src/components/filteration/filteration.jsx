import { IoMdSearch } from "react-icons/io";
import { regions } from "../../data/regions";
import { useState } from "react";

const Filteration = ({ filter, setFilter }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center  gap-5 mb-8">
      <label className="search-wrapper bg-element md:w-sm shadow-2xl rounded-md flex gap-2 items-center p-3 text-[17px]">
        <IoMdSearch size={20} className="cursor-pointer" />
        <input
          type="text"
          placeholder="Search for a country..."
          className="search-input border-none outline-none w-full"
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          value={filter.search}
        />
      </label>

      <select
        onChange={(e) => setFilter({ ...filter, region: e.target.value })}
        value={filter.region}
        className="bg-element shadow-2xl rounded-md p-3 outline-none cursor-pointer w-52"
      >
        <option hidden>Filter by Region</option>
        {regions.map((region) => (
          <option key={region.id} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filteration;
