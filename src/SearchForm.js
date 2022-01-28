import { useState } from "react";

function SearchForm({ searchText }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    searchText(text);
    e.target.reset()
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            type="text"
            placeholder="e.g politics"
            className="input"
            onChange={(e) => setText(e.target.value)}
          />

          <button type="submit" className="btn">
            Search
          </button>
        </label>
      </form>
    </div>
  );
}

export default SearchForm;
