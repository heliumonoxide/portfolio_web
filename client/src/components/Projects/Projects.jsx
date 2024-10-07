import VerticalCarousel from "../VerticalCarousel/VerticalCarousel";
import { useState, useEffect } from "react";

const Projects = () => {
  const hardwares = [
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
      logos: ["assets/python.svg", "assets/arduino.svg", "assets/django.svg"],
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
      logos: ["assets/python.svg", "assets/arduino.svg", "assets/django.svg"],
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

  const softwares = [
    {
      title: "Order Aging Website",
      content: "A sophisticated data visualization website employing Angular as the front-end framework and .NET Core 8.0 as the backend infrastructure. The project leverages Microsoft SQL Server and SAP for database management and incorporates advanced functionalities such as dynamic remarks, data filtering, and data export features. This website is utilized across the Southeast Asia region, serving a diverse user base with varying data visualization needs.",
      logos: ["assets/dotnet.svg", "assets/cs.svg", "assets/microsoftsql.svg", "assets/angular.svg"],
      picture: "assets/companies/siemens.svg",
      link: "",
    },
    {
      title: "VidCompH26X Application",
      content: "A sophisticated video compression application utilizing Python and Tkinter, designed to provide an efficient user experience through a modern and intuitive interface. The application implements H.261 and H.263 codec algorithms for effective video compression with more features of configuration of output. The user interface was meticulously designed using Tkinter Designer and Figma, ensuring both functionality and aesthetic appeal.",
      logos: ["assets/python.svg", "assets/tkinter.png", "assets/ffmpeg.svg"],
      picture: "assets/projects/vidcomp.png",
      link: "https://github.com/vincadrn/signal-processing-final",
    },
    {
      title: "Excel bot automation application",
      content: "This Python script automates the process of inserting rows of data from order aging Excel files into a Microsoft SQL Server database. By utilizing powerful libraries like pymssql, pandas, and numpy, it handles data extraction, transformation, and loading (ETL) efficiently. The script is packaged into an executable file using PyInstaller for ease of use.",
      logos: ["assets/python.svg", "assets/pandas.svg"],
      picture: "assets/companies/siemens.svg",
      link: "",
    },
    {
      title: "E-commerce Catalogue Automator",
      content: "E-Commerce Catalogue Automator is a user-friendly, free bot designed to help users dominate time-based deals on Shopee, addressing the difficulty and inaccessibility of existing bots. Built with libraries like Selenium, PyQT5, and Numpy, the project features a custom UI designed using PYQT5 designer tools, with images handled through converted QRC files. The front-end is generated and modified to handle inputs like email, password, product specs, payment methods, time, and product links, while `main.py` coordinates front-end and back-end processes for smooth automation. The bot is accessible via GitHub.",
      logos: ["assets/python.svg", "assets/pyqt.svg", "assets/selenium.svg"],
      picture: "assets/projects/ecommerce.png",
      link: "https://docs.google.com/presentation/d/1XMmV9S4zFherrvBvy115Ia3s96Pp-kDWX5xlnsAxmw0/edit?usp=sharing",
    },
    {
      title: "Application Link Portal Website",
      content: "The Application Link Portal Website is a user-friendly web platform developed using Angular for the front end and .NET 8 Core for the back end. This portal centralizes access to various applications and services within an organization, providing users with a single, secure point of entry. With its intuitive navigation and responsive design, the portal ensures optimal user experience across different devices.",
      logos: ["assets/dotnet.svg", "assets/cs.svg", "assets/microsoftsql.svg", "assets/angular.svg"],
      picture: "assets/companies/siemens.svg",
      link: "",
    },
    {
      title: "Training Request Bot",
      content: "Fully automated bot that triggered when new request is made within SharePoint platform. Databases reside within SharePoint where the  data then processed with Power Automate using API. Request comes from user interface that's designed and built by PowerApps. This Bot automates the process from employee to request incidental training, process, and log all the information based on the flow.",
      logos: ["assets/powerapps.svg", "assets/powerautomate.svg", "assets/sharepoint.svg"],
      picture: "assets/companies/telkomsel.svg",
      link: "",
    },
    {
      title: "Working Permit ID by EHS",
      content: "A form-based application designed for managing the approval process of working permits within an organization. The application is developed using PowerApps, SharePoint, and Power Automate. It is tailored to handle multiple levels of approval, including adding precaution measure from contractor engagement manager, review by the PIC Area, and final approval by the Environmental Health and Safety (EHS) team and generating final report file.",
      logos: ["assets/powerapps.svg", "assets/powerautomate.svg", "assets/sharepoint.svg"],
      picture: "assets/companies/siemens.svg",
      link: "",
    },
    {
      title: "Event Protection Checklist",
      content: "A form-based application designed for managing the protection check for an event within an organization. The application is developed using PowerApps, SharePoint, and Power Automate. It is tailored to handle multiple levels of approval, multiple level case forms, including simple one-step approval to every side, and generating final report file.",
      logos: ["assets/powerapps.svg", "assets/powerautomate.svg", "assets/sharepoint.svg"],
      picture: "assets/companies/siemens.svg",
      link: "",
    },
    {
      title: "Fast Processing Local Inventory",
      content: "This project aims to simplify the process of inventory management for users by digitizing asset or item tracking. Generally, the program includes features to add items, modify the quantity of stored items, display all items successfully added to the inventory, delete items from the inventory, and search for items within the inventory. Since the Final Project requires the implementation of Linked List and Binary Tree data structures, these structures will be utilized and displayed within relevant features of the program.",
      logos: ["assets/c.svg"],
      picture: "assets/projects/inventory.png",
      link: "https://github.com/vincadrn/program-inventarisasi",
    },
    {
      title: "Primezone Play Zone (C games playground)",
      content: "This project uses the C language as a programming base. The name primezone comes from timezone, a place to play games. Same as timezone, primezone also provides several games including Pokemon, Dino Duel, etc. As the player, you must top up first. Then you can play as you like. Each game will provide guidance to play the game. So have fun!",
      logos: ["assets/c.svg"],
      picture: "assets/projects/primezone.png",
      link: "",
    },
  ]

  const ais = [
    {
      title: "Human Animal Classification System with Millimeter Wave (3D-CNN VGG16 based)",
      content: "The post-disaster condition is an emergency that requires immediate first aid from rescue teams. Therefore, the use of radar has been developed to detect humans in post-disaster conditions. Unfortunately, the numerous parameters affecting classification, such as rubble covering humans, limit the use of 24 GHz radar. Therefore, the method was further developed using Convolutional Neural Networks (CNN). The accuracy achieved improved to 99% for both two-class and three-class classifications, but it decreased to 68% for classifications with more classes. This project proposes the use of a 3D-Convolutional Neural Network method to enhance the resolution of the data used in model training, aiming to improve the accuracy of class classification with the proposed model.",
      logos: ["assets/python.svg", "assets/matlab.svg", "assets/uipath.svg", "assets/cuda.svg", "assets/keras.svg"],
      picture: "assets/companies/ui.svg",
      link: "https://github.com/heliumonoxide/konservasi_air",
    },
    {
      title: "LSTM Predictive Maintenance for Pressing Machine",
      content: "This project is used as a system to predict whether the machine need a maintenance or not before it actually happen using 4 indicator as fields label. Data taken as a sequence to train using LSTM and Classification using simple neural network.",
      logos: ["assets/python.svg", "assets/cuda.svg", "assets/keras.svg"],
      picture: "assets/projects/predictive.png",
      link: "https://colab.research.google.com/drive/1SFAfNoVT9vMATdCAYxFNKm2T-PHHxHtX?usp=sharing",
    },
    {
      title: "Fine-Tuned Backpropagation Neural Network with Direct Inverse Control (DIC)",
      content: "This project implements Direct Inverse Control (DIC) using Backpropagation Neural Networks (BPNN) to manage complex dynamic systems. As problems grow in complexity with many interacting variables, BPNN helps model and adapt these systems through continuous fine-tuning of parameters. The DIC method, shown in the block diagram, uses the plant's inverse to predict system inputs from past outputs, ensuring precise control by minimizing error in a closed-loop system. This approach enhances the accuracy of the model, particularly when handling random data, making it effective for training and testing phases.",
      logos: ["assets/matlab.svg"],
      picture: "assets/projects/DIC.png",
      link: "https://github.com/heliumonoxide/BPNN_FineTuned_DIC",
    },
    {
      title: "Enhanced Linear Active Disturbance Rejection Control Algorithm for PMSM",
      content: "This project is used for research purposes where ELADRC is a controller in system that uses 2 linear extended state observers as feedback for dynamic system. In this case, this controller algorithm is used on Permanent Magnet Synchronous Motor as stabilized/robust motor control from any disturbances. This algorithm is compiled using CMEX to encapsulate the controller model into useable S-Function block in Simulink.",
      logos: ["assets/matlab.svg", "assets/cmex.png"],
      picture: "assets/projects/DIC.png",
      link: "https://github.com/heliumonoxide/BPNN_FineTuned_DIC",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex));
    }); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [hardwares.length]);

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
                  <VerticalCarousel cards={hardwares} />
                </div>
                <div className="flex flex-col gap-5 w-[100vw] max-w-full py-10 px-10 items-center justify-center">
                  <VerticalCarousel cards={softwares} />
                </div>
                <div className="flex flex-col gap-5 w-[100vw] max-w-full py-10 px-10 items-center justify-center">
                  <VerticalCarousel cards={ais} />
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
