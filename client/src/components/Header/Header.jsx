import LogoNavbar from "../../assets/Header.png";
import { Link } from "react-router-dom";

const Header = () => {
  const Navbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "My Projects",
      link: "/",
    },
    {
      name: "LogoNavbar",
      link: "/",
    },
    {
      name: "Resume",
      link: "/",
    },
    {
      name: "Experience",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  return (
    <>
      <nav className="h-auto bg-zinc-800 mx-8 text-zinc-200 mt-5 rounded-full shadow-xl">
        <ul className="mx-4 flex flex-row gap-2 h-[55px] justify-around">
          {Navbar.map((item, index) => (
            <li
              key={index}
              className="flex flex-col justify-center font-semibold w-full"
            >
              {item.name != "LogoNavbar" && (
                <Link
                  to={item.link}
                  className="h-[40px] place-content-center p-3 flex items-center transition ease-in-out delay-150 rounded-full hover:scale-110 hover:bg-violet-600 duration-300"
                >
                    {item.name}
                </Link>
              )}
              {item.name == "LogoNavbar" && (
                <Link to={item.link} className="flex place-content-center">
                  <img
                    src={LogoNavbar}
                    alt="Logo Navbar"
                    className="h-[40px]"
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
