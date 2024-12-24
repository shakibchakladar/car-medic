import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Servicess",
      path: "/servicess",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <div className="navbar bg-base-100 text-black container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href="/">
          <h2 className="font-extrabold text-xl shadow-sm rounded-md">
            Car<span className="text-primary">Medic</span>
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {navItems.map((item) => (
          <Link
            className="px-5 font-semibold hover:text-primary duration-300"
            href={item.path}
            key={item.path}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="navbar-end">
     <div className="flex items-center justify-center space-x-3">
     <AiOutlineShoppingCart className="text-xl" />
     <IoSearch className="text-2xl"/>
     </div>
        <a className="btn btn-outline btn-primary px-4">Apointment</a>
      </div>
    </div>
  );
};

export default Navbar;
