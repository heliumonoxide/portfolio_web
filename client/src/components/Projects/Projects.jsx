import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";
import { useState, useEffect } from "react";

const Projects = () => {
  const cards = [
    {
      title: "Card 1",
      content:
        "This is the first card. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      logos: ["assets/react.svg", "assets/react.svg"],
      picture: "assets/WQM.gif",
      link: "https://youtube.com",
    },
    {
      title: "Card 1",
      content:
        "This is the first card. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      logos: ["assets/react.svg", "assets/react.svg"],
      picture: "assets/WQM.gif",
      link: "https://youtube.com",
    },
    {
      title: "Card 1",
      content:
        "This is the first card. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      logos: ["assets/react.svg", "assets/react.svg"],
      picture: "assets/WQM.gif",
      link: "https://youtube.com",
    },
    {
      title: "Card 2",
      content: "This is the second card.",
      logos: ["assets/react.svg", "assets/react.svg"],
      picture: "assets/WQM.gif",
      link: "https://youtube.com",
    },
    {
      title: "Card 3",
      content: "This is the third card.",
      logos: ["assets/react.svg", "assets/react.svg"],
      picture: "assets/WQM.gif",
      link: "https://youtube.com",
    },
    {
      title: "Card 4",
      content: "This is the third card.",
      logos: ["assets/react.svg", "assets/react.svg"],
      picture: "assets/WQM.gif",
      link: "https://youtube.com",
    },
    {
      title: "Card 5",
      content: "This is the third card.",
      logos: ["assets/react.svg", "assets/react.svg"],
      picture: "assets/WQM.gif",
      link: "https://youtube.com",
    },
    {
      title: "Card 6",
      content: "This is the third card.",
      logos: ["assets/react.svg", "assets/react.svg"],
      picture: "assets/WQM.gif",
      link: "https://youtube.com",
    },
    {
      title: "Card 7",
      content: "This is the third card.",
      logos: ["assets/react.svg", "assets/react.svg"],
      picture: "assets/WQM.gif",
      link: "https://youtube.com",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex));
    }); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <>
      <section id="projects">
        <div className="flex flex-col h-[100vh] justify-center">
          <div className="flex flex-row w-full px-10 mt-10 inline-block justify-center text-xl md:text-4xl font-bold text-violet-600">
            <h1 className="bg-violet-100 p-5">My Projects (2020 - 2024)</h1>
          </div>
          <div className="flex flex-row w-full px-10 mt-10 justify-center md:gap-10">
            <button onClick={() => setActiveIndex(0)}>
              <div
                className={
                  activeIndex !== 0
                    ? `transition ease-in-out duration-300 bg-violet-600 hover:bg-transparent hover:border-violet-600 hover:text-black backdrop-blur-md border border-white/20 rounded-lg p-8 text-violet-100 font-thin text-sm sm:text-lg md:text-xl px-5 py-3`
                    : `bg-transparent rounded-lg border border-violet-600 text-black font-thin text-sm sm:text-lg md:text-xl px-5 py-3`
                }
              >
                Hardware Projects
              </div>
            </button>
            <button onClick={() => setActiveIndex(1)}>
              <div
                className={
                  activeIndex !== 1
                    ? `transition ease-in-out duration-300 bg-violet-600 hover:bg-transparent hover:border-violet-600 hover:text-black backdrop-blur-md border border-white/20 rounded-lg p-8 text-violet-100 font-thin text-sm sm:text-lg md:text-xl px-5 py-3`
                    : `bg-transparent rounded-lg border border-violet-600 text-sm text-black font-thin sm:text-lg md:text-xl px-5 py-3`
                }
              >
                Software Projects
              </div>
            </button>
            <button onClick={() => setActiveIndex(2)}>
              <div
                className={
                  activeIndex !== 2
                    ? `transition ease-in-out duration-300 bg-violet-600 hover:bg-transparent hover:border-violet-600 hover:text-black backdrop-blur-md border border-white/20 rounded-lg p-8 text-violet-100 font-thin text-sm sm:text-lg md:text-xl px-5 py-3`
                    : `bg-transparent rounded-lg border border-violet-600 text-sm text-black font-thin sm:text-lg md:text-xl px-5 py-3`
                }
              >
                AI Projects
              </div>
            </button>
          </div>
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row w-[100vw] max-w-full overflow-hidden justify-center">
              <div
                className="flex flex-row w-[100vw] max-w-full mt-2 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`,
                }}
              >
                <div className="flex flex-col gap-5 w-[100vw] max-w-full py-10 px-10 items-center justify-center">
                  <VerticalCarousel cards={cards} />
                </div>
                <div className="flex flex-col gap-5 w-[100vw] max-w-full py-10 px-10 items-center justify-center">
                  <VerticalCarousel cards={cards} />
                </div>
                <div className="flex flex-col gap-5 w-[100vw] max-w-full py-10 px-10 items-center justify-center">
                  <VerticalCarousel cards={cards} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
