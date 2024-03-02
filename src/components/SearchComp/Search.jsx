import React, { useRef } from 'react';
import './search.css'; 

const Search = () => {
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    const searchTerm = searchInputRef.current.value.toLowerCase();
    const pageText = document.body.innerText.toLowerCase();

    if (pageText.includes(searchTerm)) {
      const regex = new RegExp(searchTerm, 'gi');
      const matches = pageText.match(regex);

      // Highlight or scroll to the first occurrence
      const firstOccurrence = document.body.innerHTML.replace(
        regex,
        '<span class="highlighted">$&</span>'
      );
      document.body.innerHTML = firstOccurrence;

      // Display the number of occurrences
      alert(`Found ${matches.length} occurrences of "${searchTerm}".`);
    } else {
      alert(`No occurrences of "${searchTerm}" found.`);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        ref={searchInputRef}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
