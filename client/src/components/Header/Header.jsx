import LogoNavbar from "../../assets/Header.png";
import { useState, useEffect } from "react";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1); // Start with full opacity
  const [offset, setOffset] = useState("1");
  const [menuOpen, setMenuOpen] = useState(false);

  const Navbar = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "My Projects",
      link: "#projects",
    },
    {
      name: "LogoNavbar",
      link: "#home",
    },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1L8VPK_BW_u8u1eQjPmAZa5aKvEj3dOgV/view?usp=sharing",
    },
    {
      name: "Experience",
      link: "#experiences",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const controlNavbarOpacity = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down
        setOpacity(0); // Fade out
        setOffset(0);
      } else {
        // Scrolling up
        setOpacity(1); // Fade in
        setOffset("1");
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state
  };

  return (
    <>
      <section id="home">
        <nav className="active fixed w-full h-[auto] mt-5 z-50">
          <div
            className="flex flex-col xl:flex-row justify-around mx-8 bg-zinc-800 text-violet-50 rounded-full shadow-xl h-[55px] transition-all duration-500"
            style={{ opacity: opacity, scale: offset }}
          >
            <div className="flex flex-row xl:block xl:hidden justify-between px-10 my-2">
              <a href="#home"><img height="40px" src={LogoNavbar} alt="Logo Navbar" className="h-[40px]" /></a>
              <button onClick={toggleMenu}>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  width="1.25rem"
                  height="1.25rem"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`mx-4 py-4 flex flex-col h-auto ${
                menuOpen
                  ? "scale-100 visible rounded-lg bg-zinc-800/30"
                  : "scale-0 invisible"
              } xl:scale-100 xl:bg-transparent xl:visible xl:flex-row gap-1 xl:h-[55px] justify-around xl:w-full`}
            >
              {Navbar.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col justify-center font-semibold w-full items-center px-20 xl:px-0"
                >
                  {item.name != "LogoNavbar" && (
                    <a
                      href={item.link}
                      className="h-[40px] place-content-center p-3 flex items-center transition ease-in-out delay-150 w-full rounded-full hover:scale-110 hover:bg-violet-600 duration-300"
                    >
                      {item.name}
                    </a>
                  )}
                  {item.name == "LogoNavbar" && (
                    <a
                      href={item.link}
                      className="flex hidden block xl:visible xl:inline w-[107px]"
                    >
                      <img
                        src={LogoNavbar}
                        alt="Logo Navbar"
                        className="h-[40px]"
                      />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
