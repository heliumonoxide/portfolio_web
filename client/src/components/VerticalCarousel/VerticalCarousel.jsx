import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const VerticalCarousel = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dotsMap = Array(cards.length).fill("");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <>
      <div className="flex flex-row w-[100vw] max-w-full px-0 md:px-10 gap-10">
        <div className="top-0 right-0 h-full flex items-center justify-center">
          <button
            onClick={() =>
              setActiveIndex(
                activeIndex === 0 ? cards.length - 1 : activeIndex - 1
              )
            }
            className="bg-transparent p-0 md:p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="4em"
              viewBox="-1 -5 12 24"
            >
              <defs>
                <path
                  id="weuiArrowOutlined0"
                  fill="#7c3aed"
                  d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                />
              </defs>
              <use
                fillRule="evenodd"
                href="#weuiArrowOutlined0"
                transform="rotate(0 5.02 9.505)"
              />
            </svg>
          </button>
        </div>
        <div className="relative w-full h-[400px] overflow-hidden rounded-md md:px-5">
          <div
            className="flex flex-col transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateY(-${(activeIndex * 100) / cards.length}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="group w-full h-[400px] pt-5 pb-10 flex md:flex-row flex-col items-center justify-center rounded-lg"
              >
                <span className="absolute scale-0 transition-all rounded bg-gray-800 z- p-2 text-xs text-white group-hover:scale-100">
                      {card.content}
                    </span>
                <div className="flex md:w-[800px] h-[100px] overflow-hidden md:h-full justify-center content-center md:pr-10">
                  <img
                    className="object-contain object-left rounded-lg md:h-[320px]"
                    src={card.picture}
                    alt=""
                  />
                </div>
                <div className="text-center items-center flex flex-col gap-2 justify-between h-full w-full text-zinc-800 py-5">
                  <h2 className="text-lg md:text-4xl font-semibold text-violet-950">
                    {card.title}
                  </h2>
                  <p className="text-sm md:text-base line-clamp-3 md:line-clamp-6">
                    {card.content}
                  </p>
                  <div className="flex flex-col gap-3 mt-2 md:mt-0 md:gap-0 md:flex-row md:justify-between w-full">
                    <div className="flex flex-row justify-center md:justify-start gap-1 md:gap-5">
                      {card.logos.map((logo, logoIndex) => (
                        <img
                          key={logoIndex}
                          src={logo}
                          className="h-[20px] md:h-[40px]"
                          alt=""
                        />
                      ))}
                    </div>
                    {card.link != "" && (
                      <div className="bg-gradient-to-r from-[#FF63EA] to-[#0029CF] text-sm md:text-lg inline-block px-4 py-2 text-transparent bg-clip-text">
                        <a href={card.link}>Go to project {">"}</a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots to indicate active slide */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
            {dotsMap.map((_, index) => (
              <div
                key={index}
                className={`w-1 h-3 rounded-md ${
                  index === activeIndex ? "bg-violet-600" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="top-0 right-0 h-full flex items-center justify-center">
          <button
            onClick={() =>
              setActiveIndex(
                activeIndex === cards.length - 1 ? 0 : activeIndex + 1
              )
            }
            className="bg-transparent p-0 md:p-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="4em"
              viewBox="0 0 12 24"
            >
              <defs>
                <path
                  id="weuiArrowOutlined0"
                  fill="currentColor"
                  d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
                />
              </defs>
              <use
                fillRule="evenodd"
                href="#weuiArrowOutlined0"
                transform="rotate(-180 5.02 9.505)"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

// Add prop-types validation
VerticalCarousel.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      logos: PropTypes.arrayOf(PropTypes.string).isRequired,
      picture: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VerticalCarousel;
