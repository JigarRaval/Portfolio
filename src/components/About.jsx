const About = () => {
  return (
    <div
      name="about"
      className="w-full  pb-52  bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-15">
          Hello! I’m Jigar Raval, a passionate Fullstack Developer currently
          pursuing a Bachelor’s degree in Information Technology at GEC Modasa.
          With a strong foundation in both front-end and back-end technologies,
          I bring a diverse skill set to the table, including expertise in HTML,
          CSS, JavaScript, and React for building dynamic user interfaces, as
          well as proficiency in Node.js, Express, and TailwindCSS for creating
          robust server-side applications. My academic journey has been
          complemented by hands-on Skills in crafting innovative projects,
          allowing me to blend creativity with technical skills to solve
          real-world problems.
        </p>

        <br />

        <p className="text-xl">
          Throughout my career, I’ve had the opportunity to develop and refine
          several impressive projects that showcase my ability to create
          seamless, functional web applications. From designing responsive and
          visually appealing user interfaces to implementing scalable
          server-side solutions, I am dedicated to delivering high-quality work
          that meets client needs and exceeds expectations. I’m excited about
          continuing to grow as a developer and contributing to the tech
          community with my passion for technology and commitment to excellence.
        </p>
      </div>
    </div>
  );
};

export default About;
