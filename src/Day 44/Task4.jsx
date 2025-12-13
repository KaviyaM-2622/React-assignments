function City() {
  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Bengaluru" },
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Delhi" },
    { id: 5, name: "Hyderabad" },
  ];

  return (
    <ol>
      {cities.map((city) => (
        <li key={city.id}>{city.name}</li>
      ))}
    </ol>
  );
}

export default City;
