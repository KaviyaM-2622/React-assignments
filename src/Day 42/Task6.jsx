function ProfileCard({ name, job, avatar }) {
  return (
    <div style={{
      border: "2px solid #444",
      padding: "30px",
      borderRadius: "10px",
      width: "200px",
      textAlign: "center",
      margin: "20px auto"
    }}>
      <img 
        src={avatar} 
        alt="Profile" 
        style={{ width: "120px", height: "120px", borderRadius: "50%" }} 
      />
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}

export default ProfileCard;
