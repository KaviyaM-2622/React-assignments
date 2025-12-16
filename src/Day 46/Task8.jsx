import React, { useState, useEffect } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return; 

    fetch(`https://api.example.com/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => setResults(data.items || [])) 
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item.name || item.title}</li>
        ))}
      </ul>
    </div>
  );
}
