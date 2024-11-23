import React, { useRef, useEffect } from "react";
import HeroImg from "../assets/dev-img.gif";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import Typed from "typed.js";
import { MdOutlineFileDownload } from "react-icons/md";
import Downloadpdf from "../assets/bodyimg/resume.pdf";

function Home() {
  const runningtext = useRef(null);

  useEffect(() => {
    const typedInstance = new Typed(runningtext.current, {
      strings: ["Full-stack developer", "Photographer", "Front-end developer","Tech-savvy
" ],
      typeSpeed: 100,
      backSpeed: 100,
      cursorChar: "_",
      shuffle: true,
      smartBackspace: false,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typedInstance.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-center h-full md:py-28 md:mb-10"
    >
      <div className="md:w-1/2">
        <div className="text-3xl lg:text-5xl px-10 py-36">
          <p>Hi,</p>
          <br />
          <div style={{ paddingTop: "1rem" }}>
            <span className="py-6">
              I'm <span className="text-yellow-500 font-bold">Sree Ram</span>
            </span>
          </div>
          <br />
          <div style={{ paddingTop: "1rem" }}>
            <span className="py-3">
              I am a <span ref={runningtext} className="font-bold"></span>
            </span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className=" flex flex-row px-12 -my-10 ">
            <a
              className="pr-10 hover:text-yellow-500"
              href="https://github.com/sreeramss"
            >
              <FaGithub size={50} />
            </a>
            <a
              className="pr-10 hover:text-yellow-500"
              href="https://www.linkedin.com/in/sreeram-ss"
            >
              <FaLinkedin size={50} />
            </a>
            <a
              className="hover:text-yellow-500"
              href="https://www.instagram.com/sreeram_s_s_"
            >
              <FaInstagramSquare size={50} />
            </a>
          </div>
          <div className="ml-16 mr-20 mt-28 lg:-mt-10 px-12 py-4 text-sm font-medium text-white bg-black rounded-3xl hover:bg-yellow-500 flex justify-between">
          <a className="flex" href={Downloadpdf} download="Sreeram Resume.pdf">
              <span className="mr-4">Resume</span>
              <MdOutlineFileDownload size={20} />
          </a>
          </div>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} />
    </section>
  );
}

export default Home;
