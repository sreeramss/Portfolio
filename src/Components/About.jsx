import AboutImage from '../assets/about-img.png';

export default function About() {
  return (
    <section id='about' className="md:pt-28 px-6 py-8 md:px-12 lg:px-20 xl:px-32">
      <div className="text-center text-5xl font-bold ">ABOUT ME</div>
      <div className="flex flex-col-reverse md:flex-row items-center mt-8 space-y-8 md:space-y-0 md:space-x-12 md:pt-16 md:pb-10">
        <div className="w-full md:w-1/2 text-center">
          <img className="mx-auto md:w-4/5 lg:w-3/4 xl:w-2/3" src={AboutImage} alt="About Me" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col justify-center text-xl xl:text-2xl space-y-5">
            <p>Hi, I am a full-stack web developer. As an Electronics and Communication Engineer with a passion for front-end development,</p>
            <p>My journey has led me to master HTML, CSS, JavaScript, React, Node.js, and MongoDB, empowering me to create engaging and dynamic user experiences.</p>
            <p> I am now actively seeking permanent positions where I can apply my expertise and contribute to innovative projects. I thrive on the intersection of technology and creativity, constantly seeking new challenges and opportunities to innovate.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
