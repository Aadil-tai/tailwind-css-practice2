import logo from "../../assets/logo.png"; // Correct path for the logo
const Navbar = () => {
  const navitems = [
    { link: "About", path: "/home" },
    { link: "Products", path: "/products" },
    { link: "Top Brands", path: "/topbrands" },
  ];
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <a
          href="/"
          className="text-2xl font-semibold flex items-center space-x-3 text-primary"
        >
          <img
            src={logo} // Use the imported logo here correctly
            alt="Logo"
            className="w-10 inline-block items-center"
          />
        </a>

        {/* Menu Section */}
        <ul className="md:flex space-x-12">
          {navitems.map(({ link, path }) => (
            <li key={link}>
              <a href={path} className="block hover:text-gray-300 text-black">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
