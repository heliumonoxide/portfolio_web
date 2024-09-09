import LogoNavbar from "../../assets/Header.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1); // Start with full opacity
  const [offset, setOffset] = useState('1')

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

  const controlNavbarOpacity = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setOpacity(0); // Fade out
        setOffset(0)
      } else {
        // Scrolling up
        setOpacity(1); // Fade in
        setOffset('1')
      }

      setPrevScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbarOpacity);

      return () => {
        window.removeEventListener("scroll", controlNavbarOpacity);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollY]); // Run when `prevScrollY` changes
  
  return (
    <>
      <nav className="active h-auto bg-zinc-800 mx-8 text-zinc-200 mt-5 rounded-full shadow-xl transition-all duration-500" style={{ opacity: opacity, scale: offset}}>
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
