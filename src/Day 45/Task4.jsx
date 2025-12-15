import { useState } from "react";

function Country() {
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <select value={country} onChange={handleChange}>
        <option value="">Select a country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
      </select>
      {country && <p>You selected: {country}</p>}
    </div>
  );
}

export default Country;
