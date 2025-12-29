function ProfileCard({ name, role, image }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden text-center p-6">
      <img
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        src={image}
        alt={name}
      />
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-gray-500 mb-4">{role}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Connect
      </button>
    </div>
  );
}

export default ProfileCard;
