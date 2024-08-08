import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactJs from "../assets/react.png";
// import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
// import graphql from "../assets/graphql.png";
import node from "../assets/node.png";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactJs,
      title: "ReactJs",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },

    {
      id: 8,
      src: tailwind,
      title: "TailWind",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="Skills"
      className="w-full  pb-52  bg-gradient-to-b from-gray-800  to-black text-white"
    >
      <div className="max-w-screen-lg  mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6">These are the technologies I have worked with.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 text-center py-8 px-12 sm:px-0 gap-8 w-full">
          {techs.map(({ id, src, style, title }) => (
            <div
              key={id}
              className={
                "shadow-md duration-500 hover:scale-105 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
