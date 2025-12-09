function Layout({ children }) {
  return (
    <div>
      <header style={{
        backgroundColor: "#333",
        color: "white",
        padding: "15px",
        textAlign: "center"
      }}>
        <h1>React page</h1>
      </header>

      <main style={{ padding: "20px" }}>
        {children}
      </main>

    </div>
  );
}

export default Layout;
