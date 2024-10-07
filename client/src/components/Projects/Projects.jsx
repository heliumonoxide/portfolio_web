import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";
import { useState, useEffect } from "react";

const Projects = () => {
  const cards = [
    {
      title: "Water Quality Monitoring Device",
      content: "A mechanical machine with ESP32 as microcontroller base. Utilizing all the ESP32 features, Deep Sleep, SPIFFS, and Wi-Fi module of ESP32 is used. SPIFFS is used for webpage file and data partitioning for optimizing each process. Wi-Fi module is used for connecting the ESP32 into local Wi-Fi and assigning IP Address into ESP32 in the network. Because of the large network in Wi-Fi Universitas Indonesia, direct cloud server for the database is no longer needed. Data (JSON) in the ESP32 then can be accessed for showing the webpage and process pooled data into a conclusion. Each of the mechanical parts is already up to food standard.",
      logos: ["assets/autocad.svg", "assets/kicad.svg", "assets/css.svg", "assets/javascript.svg", "assets/html.svg"],
      picture: "assets/projects/WQM.gif",
      link: "https://github.com/heliumonoxide/konservasi_air",
    },
    {
      title: "Pure Water Generator",
      content:
        "A machine that befits its name, generating pure water without any ions or particle within. This machine is strictly designed machine that needed to precise in its each water channel. This machine comprises of transmitters and actuators. The transmitter transmits value data to the controller to be processed within and actuator make controller calculation to idealize the water into pure water. Water is processed with pH dosing and filters.",
      logos: ["assets/python.svg", "assets/arduino.svg"],
      picture: "assets/projects/pharos.png",
      link: "",
    },
    {
      title: "Photoresistor Based Automatic Light Control System",
      content:"The project titled Automatic Energy-Saving Light Based on Light Sensors aims to address the issue of excessive electricity consumption in public facilities, particularly in spaces like public restrooms where lighting is often left on unnecessarily. To improve energy efficiency, the system automates the on/off control of lights using light sensors.",
      logos: ["assets/proteus.png"],
      picture: "assets/projects/photoresistor.png",
      link: "https://drive.google.com/file/d/1zp19Pxu_OPTzCW2J65NFe_33kdtMRLO4/view",
    },
    {
      title: "PIR and Ultrasonic Sensor Based Automatic Rat Repellent",
      content: "The project, named Rat Exorcistem, utilizes an Arduino UNO R3, a PIR sensor, and a buzzer. The device functions effectively, as demonstrated by its output, which aligns with the expected conditions. The aim of this tool is to repel rats that commonly disturb residents. As a result, it is expected to help reduce both material and emotional losses caused by rats.",
      logos: ["assets/arduino.svg"],
      picture: "assets/projects/ratrepel.png",
      link: "https://drive.google.com/file/d/1XCgasi8jkvndpD5lEIWsN-7jXgw1sZNK/view",
    },
    {
      title: "Automatic Safety Seatbelt System for Car",
      content: "This car seat belt alarm is a tool that can detect someone who is not wearing a seatbelt and tells that person to wear a seatbelt with light and sound output. The light output here is in the form of a lamp that lights up when a person is detected and is not wearing a seatbelt, accompanied by a sound that can be heard by that person. With the alarm on the seatbelt, it is hoped that car drivers will not forget to wear a seat belt every time they drive a car.",
      logos: ["assets/proteus.png", "assets/arduino.svg"],
      picture: "assets/projects/seatbelt.png",
      link: "https://drive.google.com/file/d/1dy-IGggOf4xdm7wHP-GDBp1GEGVbGrN6/view",
    },
    {
      title: "Automated Storage Retrieval System (ASRS)",
      content: "An Automated Storage and Retrieval System (ASRS) using Arduino Mega is designed to automate the process of storing and retrieving items from designated storage locations. The system utilizes the Arduino Mega microcontroller to control motors, sensors, and actuators, enabling precise movement of a retrieval mechanism along multiple axes. The system identifies and retrieves items based on user input or programmed instructions, improving efficiency in warehouses by reducing manual labor and minimizing retrieval time. This solution provides a reliable and scalable method for inventory management and warehouse automation.",
      logos: ["assets/python.svg", "assets/arduino.svg"],
      picture: "assets/projects/pharos.png",
      link: "",
    },
    {
      title: "IoT-based Automatic Trash Bin with Capacity Indicator",
      content: "The IoT-based Automatic Trash Bin with Capacity Indicator integrates waste disposal with technology using components like two ultrasonic sensors, a servo motor, and an LCD display. The trash bin measures its fill level using one ultrasonic sensor, displaying the capacity as a percentage on both the LCD and the Blynk app for remote monitoring. When the trash reaches over 68% capacity, the system indicates that the bin is full via the display and triggers a virtual LED on the Blynk app, notifying users to empty it.",
      logos: ["assets/esp.svg", "assets/blynk.svg"],
      picture: "assets/projects/tempatsampah.png",
      link: "https://drive.google.com/drive/folders/1WCYjPSjdJj-kUagBMOR4bk9GrNG97IL0?usp=drive_link",
    },
    {
      title: "Robotic Arm 4 DoF",
      content: "Simple Project Robotic Arm controlled with Arduino Mega 2560 via 2 2-axis joysticks. Power supplied to each servo by 5V battery and communicated with 16 channel servo motor driver modules.",
      logos: ["assets/arduino.svg"],
      picture: "assets/projects/roboticarm.jpeg",
      link: "https://github.com/heliumonoxide/4_DOF_ARDUINO",
    },
    {
      title: "Box Sorter FactoryIO",
      content: "PLC based program that serves as logic flow for sorting a box based on its dimension and counting how many boxes have been sorted. Each component will take on register memory that will be used on FactoryIO to simulate its function using Modbus TCP/IP communication between Ecostruxure Schneider Machine Expert and FactoryIO.",
      logos: ["assets/factoryio.png", "assets/nodered.svg"],
      picture: "",
      link: "",
    },
    {
      title: "Line Follower OpenGL Robot",
      content: "Robust tuned Line Follower Virtual Robot that’s animated with OpenGL platform. Refined with Jacobian matrix to control, the robot is able to read black line be it thin or sharp turn supported by PID Controller algorithm within.",
      logos: ["assets/esp.svg", "assets/opengl.svg", "assets/matlab.svg"],
      picture: "",
      link: "https://github.com/heliumonoxide/LF_OPENGL",
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
        <div className="flex flex-col h-[100vh] justify-center relative w-[100vw] max-w-full">
          <img src="assets/LineEllipse.png" className="absolute top-[10vh] -left-72 z-0" alt="" />
          <img src="assets/LineEllipse.png" className="absolute top-[10vh] -left-72 scale-75 z-0" alt="" />
          <img src="assets/star.png" className="absolute top-[15vh] md:top-[10vh] invisible md:visible right-[15vw] z-0" alt="" />
          <img src="assets/star.png" className="absolute top-[15vh] md:top-[15vh] invisible md:visible right-[12vw] scale-75 z-0" alt="" />
          <div className="flex flex-row w-full px-10 mt-10 inline-block justify-center text-xl md:text-4xl font-bold text-violet-600 z-30">
            <h1 className="bg-violet-100 p-5">My Projects (2020 - 2024)</h1>
          </div>
          <div className="flex flex-row w-full px-10 mt-10 justify-center md:gap-10 z-30">
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
          <div className="flex flex-row w-full justify-between z-30">
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
