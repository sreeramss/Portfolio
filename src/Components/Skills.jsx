import { skills } from '../Datas/db-skills.js';

export default function Skills() {
    return (
        <section id='skills' className="md:pt-28 p-6 sm:p-10 md:p-20">
            <div className="text-center text-4xl sm:text-5xl font-bold md:mb-10 sm:pb-4">SKILLS</div>
            <div className="flex flex-col md:flex-row justify-between text-center md:pt-10 md:pb-10 ">
                {/* Front-End Section */}
                <div className="w-full md:w-1/3 px-6 sm:px-10 md:px-20 text-2xl sm:text-3xl flex flex-col mb-10 md:mb-0 ">
                    <span className="font-bold">Front-End</span>
                    <ul className="mt-12 sm:mt-20 md:mt-24 shadow-2xl border border-gray-200 custom-hover rounded-xl lg:max-xl:-ml-16 lg:max-xl:-mr-16 md:max-lg:-ml-16 md:max-lg:-mr-16">
                        {skills.frontend.map((skill, index) => (
                            <li key={index} className="p-3 sm:p-5 flex justify-center items-center">
                                <a href={skill.link} aria-label={skill.skillName} className="flex items-center  text-2xl"> 
                                    <img 
                                        className="w-16 sm:w-20 h-16 sm:h-20 " 
                                        src={skill.imgSrc} 
                                        alt={`Icon for ${skill.skillName}`}  
                                    />
                                    <span className="ml-2 sm:ml-4">{skill.skillName}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Frameworks Section */}
                <div className="w-full md:w-1/3 px-6 sm:px-10 md:px-20 text-2xl sm:text-3xl flex flex-col mb-10 md:mb-0">
                    <span className="font-bold">Frameworks</span>
                    <ul className="mt-12 sm:mt-20 md:mt-24 shadow-2xl border border-gray-200 custom-hover rounded-xl lg:max-xl:-ml-16 lg:max-xl:-mr-16 md:max-lg:-ml-16 md:max-lg:-mr-16">
                        {skills.frameworks.map((skill, index) => (
                            <li key={index} className="p-3 sm:p-5 flex justify-center items-center">
                                <a href={skill.link} aria-label={skill.skillName} className="flex items-center text-2xl">
                                    <img 
                                        className="w-16 sm:w-20 h-16 sm:h-20" 
                                        src={skill.imgSrc} 
                                        alt={`Icon for ${skill.skillName}`}  
                                    />
                                    <span className="ml-2 sm:ml-4">{skill.skillName}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Back-End Section */}
                <div className="w-full md:w-1/3 px-6 sm:px-10 md:px-20 text-2xl sm:text-3xl flex flex-col">
                    <span className="font-bold">Back-End</span> 
                    <ul className="mt-12 sm:mt-20 md:mt-24 shadow-2xl border border-gray-200 custom-hover rounded-xl lg:max-xl:-ml-16 lg:max-xl:-mr-16 md:max-lg:-ml-16 md:max-lg:-mr-16">
                        {skills.backend.map((skill, index) => (
                            <li key={index} className="p-3 sm:p-5 flex justify-center items-center">
                                <a href={skill.link} aria-label={skill.skillName} className="flex items-center text-2xl">
                                    <img 
                                        className="w-16 sm:w-20 h-16 sm:h-20" 
                                        src={skill.imgSrc} 
                                        alt={`Icon for ${skill.skillName}`} 
                                    />
                                    <span className="ml-2 sm:ml-4">{skill.skillName}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
