function CityList() {
  const cities = ["Chennai", "Bengaluru", "Mumbai", "Delhi", "Hyderabad"];

  return (
    <ul>
      {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>

    

  );
}

export default CityList;
