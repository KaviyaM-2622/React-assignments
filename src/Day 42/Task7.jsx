function SimpleButton({ text, color, size }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        padding: size,
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
}

export default SimpleButton;
