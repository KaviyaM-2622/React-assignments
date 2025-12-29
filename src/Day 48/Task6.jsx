function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 px-6 py-4 text-white">
   
      <h1 className="text-xl font-bold">MyApp</h1>

    
      <ul className="flex gap-6">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">About</li>
        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
