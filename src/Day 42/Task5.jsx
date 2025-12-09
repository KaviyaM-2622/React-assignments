function Card({ children }) {
  return (
    <div style={{
      border: "2px solid black",
      padding: "20px",
      borderRadius: "10px",
      width: "300px",
      margin: "20px auto"
    }}>
      {children}
    </div>
  );
}

export default Card;
