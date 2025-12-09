function Button({ text }) {
  return (
    <button style={{
      padding: "10px 20px",
      backgroundColor: "black",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    }}>
      {text}
    </button>
  );
}

export default Button;
