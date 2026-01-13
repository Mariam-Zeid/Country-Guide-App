const BorderCountries = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <strong>Border Countries:</strong>
      <div className="flex flex-wrap gap-2">
        <p className="bg-element px-4 py-1 shadow text-sm rounded">
          No borders
        </p>

        <p className="bg-element px-4 py-1 shadow text-sm rounded">Border</p>
      </div>
    </div>
  );
};

export default BorderCountries;
