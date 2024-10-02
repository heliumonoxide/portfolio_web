const experiences = [
  {
    date: "Dec 2023 - Present",
    title: "IT Application Developer Intern @ Siemens",
    description:
      "Developing scalable applications using React, angular, dotnet, microsoft platform, SQL databases, and cloud technologies.",
    icon: "assets/companies/siemens.svg",
  },
  {
    date: "May 2023 - Aug 2023",
    title: "Robotic Process Automation Intern @ Telkomsel",
    description: "Developing a robot for low-level activity automation using UiPath structural process and Developing flow using Microsoft Power Platform to make automation for Human Capital Manager to automate a flow for requesting new training.",
    icon: "assets/companies/telkomsel.svg",
  },
  {
    date: "Jan 2023 - May 2023",
    title: "Mechatronics Programmer @ PT. Pharos Indonesia",
    description:
      "Developed a new automation system in PT Pharos called Pure Water Generator (PWG) to support industrial automation. Tested and Troubleshoot MODBUS and Serial Communication between controller, slave, and another controller using I2C and Modbus module.",
    icon: "assets/companies/pharos.png",
  },
  {
    date: "Jan 2023 - Mar 2024",
    title: "Laboratory Assistant @ Control Laboratory Electrical Engineering Universitas Indonesia",
    description: "Developing Unmanned Vehicle like drone (UAV), rover, and line follower for practicum. Facilitated 150+ students in understanding control engineering through practical laboratory sessions.",
    icon: "assets/companies/ui.svg",
  },
];

const Experiences = () => {
  return (
    <section id="experiences">
      <div className="flex flex-col items-center py-16 bg-violet-600 text-white">
        <h2 className="text-xl md:text-4xl font-bold mb-8 bg-violet-400 p-4">
          My Working Experiences
        </h2>

        <div className="relative w-full px-10 md:px-4">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-violet-950"></div>

          <div className="flex flex-col space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative w-full md:w-2/3 mx-auto"
              >
                {/* Milestone icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-violet-950 z-30 w-12 h-12 rounded-full flex items-center justify-center z-10">
                  <img
                    src={experience.icon}
                    alt={experience.title}
                    className="w-15 h-7"
                  />
                </div>

                {/* Milestone card */}
                <div className="mt-8 w-full bg-white p-6 text-center shadow-lg z-0 rounded-lg text-violet-950 z-20">
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <span className="block text-gray-500 mb-3">
                    {experience.date}
                  </span>
                  <p>{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
