function PricingCard({ plan, price, features }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-4">{plan}</h2>
      <p className="text-3xl font-extrabold mb-4">${price}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600">{feature}</li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Choose Plan
      </button>
    </div>
  );
}

export default PricingCard;
