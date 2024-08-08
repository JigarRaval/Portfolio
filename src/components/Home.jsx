import { Link } from "react-scroll";
import HeroImage from "../assets/profile_5.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useTypewriter } from "react-simple-typewriter";
import "../App.css";
const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Jigarkumar Raval", "Fullstack Devloper"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <div
      name="home"
      className="pt-40 pb-52 w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="max-w-screen-lg flex flex-col pt-10 px-4 md:flex-row justify-center items-center mx-auto h-full">
        <div className=" flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-4xl sm:text-6xl text-white font-bold">
            Hi I am <span className="text-sky-200">{typeEffect}</span>
          </h2>
          <p className="text-gray-500 py-4  max-w-md">
            Hey! I’m Jigar, a full-stack developer with a passion for crafting
            seamless digital Skillss. From front-end magic to back-end wizardry,
            I turn ideas into elegant code. Let’s build something awesome
            together!
          </p>

          <div>
            <Link
              to="Projects"
              smooth
              duration={400}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300 ">
                <FaArrowRightLong size={15} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="pt-12 md:pt-0 rounded-full">
          <img
            src={HeroImage}
            alt="my profile"
            className="profile rounded-full  border-gray-100 border-l-8 border-b-8  mx-auto w-80 md:full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
