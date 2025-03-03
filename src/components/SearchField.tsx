import { useState } from "react";

function SearchField(props: { onSearch: (searchValue: string) => void }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (!searchValue.trim()) {
      return;
    }
    props.onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center justify-center">
        <input
          className="bg-neutral-100 w-full rounded-2xl py-3 pl-3 mx-3 placeholder:text-xl placeholder-neutral-800 placeholder:italic"
          type="text"
          placeholder="Search for a movie..."
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-blue-900 py-4 px-10 mr-6 rounded-2xl font-bold text-white"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchField;
