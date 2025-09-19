import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Employee Manager</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
       
      </div>
    </nav>
  );
};

export default Navbar;
