function Card() {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-2">Card Title</h2>
      <p className="text-gray-600 mb-4">
        This is a simple card component built with Tailwind CSS.
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Read More
      </button>
    </div>
  );
}

export default Card;
