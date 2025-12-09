function ProductItem({ title, price }) {
  return (
    <div style={{
      border: "1px solid #e81e1eff",
      padding: "15px",
      borderRadius: "8px",
      width: "250px",
      margin: "10px",
      textAlign: "center",
    }}>
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export default ProductItem;
