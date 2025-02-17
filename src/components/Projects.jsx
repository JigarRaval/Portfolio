import Paperss from "../assets/portfolio/Paperss.png";
import ConnecTalk from "../assets/portfolio/ConnecTalk2.png";

const Projects = () => {
  const list = [
    {
      id: 1,
      src: Paperss,
      github: "https://github.com/JigarRaval/Paperss",
      demo: "https://paperss.netlify.app",
    },
    {
      id: 2,
      src: ConnecTalk,
      github: "https://github.com/JigarRaval/ConnecTalk",
      demo: "https://connectalk.onrender.com/",
    },
  ];
  return (
    <div
      name="Projects"
      className=" pb-52 bg-gradient-to-b from-black to-gray-800 w-full  text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto w-full h-full flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>

          <p className="py-6">
            Explore my work and see what I've been building.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 px-12 sm:px-0 gap-8">
          {list.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={project.src}
                alt="src"
                className="rounded-md duration-300 hover:scale-110"
              />
              <div className="flex justify-center items-center">
                <button className="w-1/2 m-4 px-6 py3 duration-300 hover:scale-110">
                  <a href={project.github} target="_blank">
                    Code
                  </a>
                </button>
                <button className="w-1/2 m-4 px-6 py3 duration-300 hover:scale-110">
                  <a href={project.demo} target="_blank">
                    Demo
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
