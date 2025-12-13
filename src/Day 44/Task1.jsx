function LoginStatus() {
  const isLoggedIn = false; 

  return (
    <h1>{isLoggedIn ? "Logged In" : "Guest"}</h1>
  );
}

export default LoginStatus;
