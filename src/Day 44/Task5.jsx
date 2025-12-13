function Data() {
  const data = []; 

  return (
    <div>
      {data.length === 0 && <p>No Data Available</p>}
    </div>
  );
}

export default Data;
