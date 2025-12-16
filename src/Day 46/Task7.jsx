import React, { useState, useEffect } from "react";

function GitHubUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/KaviyaM-2622")
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{user.name || user.login}</h2>
      <img
        src={user.avatar_url}
        alt={user.login}
        width="150"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}

export default GitHubUser;
