import Getyt from '../assets/projects/get yt .png';
import Cryptoimage from '../assets/projects/CryptoDashboard.png';
import wallpaperimage from '../assets/projects/desktop-wallpaper.png';

export default function Projects() {
    return (
        <section id='projects' className="md:pt-28 px-4 py-8 md:mb-28">
            <div className="text-center text-4xl sm:text-5xl font-bold md:mb-28 sm:mb-10">PROJECTS</div>
            <div className="flex flex-col md:flex-row gap-8 justify-evenly px-4">
                {/* Project Card 1 */}
                <div className="max-w-sm bg-black border border-gray-800 rounded-lg shadow-2xl dark:bg-white dark:border-gray-300 flex-1 custom-hover-project">
                    <a href="#">
                        <img className="rounded-t-lg w-full" src={Cryptoimage} alt="Crypto Currency Dashboard" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-gray-900">Crypto Currency Dashboard</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-300 dark:text-gray-600">
                            The Crypto Currency Dashboard is a tool for checking cryptocurrency exchange rates and performing conversions.
                        </p>
                        <div className="flex justify-between">
                            <a href="https://github.com/sreeramss/Crypto-Currency-Dashboard" target='blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-yellow-400">
                                View Code
                            </a>
                            <a href="https://crypto-currency-dashboard-vert.vercel.app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-yellow-400 ">
                            Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div className="max-w-sm bg-black border border-gray-800 rounded-lg shadow-2xl dark:bg-white dark:border-gray-300 flex-1 custom-hover-project">
                    <a href="#">
                        <img className="rounded-t-lg w-full" src={wallpaperimage} alt="Desktop Wallpapers" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-gray-900">Desktop Wallpapers</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-300 dark:text-gray-600">
                            The Personal Photography Website displays high-quality images to showcase my photography skills.
                        </p>
                        <div className="flex justify-between">
                            <a href="https://github.com/sreeramss/wallpaper-desktop" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-yellow-400">
                                View Code
                            </a>
                            <a href="https://sreeramss.github.io/wallpaper-desktop/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-yellow-400">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                {/* Project Card 3 */}
                <div className="max-w-sm bg-black border border-gray-800 rounded-lg shadow-2xl dark:bg-white dark:border-gray-300 flex-1 custom-hover-project">
                    <a href="#">
                        <img className="rounded-t-lg w-full" src={Getyt} alt="Technology Acquisitions 2021" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-gray-900">Get Youtube Subscribers</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-300 dark:text-gray-600">
                        This Node.js app manages YouTube subscribers using MongoDB and Express.js with Mongoose for backend operations.
                        </p>
                        <div className="flex justify-between">
                            <a href="https://github.com/sreeramss/YT-Subscribers" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-yellow-400">
                            View Code
                            </a>
                            <a href="https://yt-subscribers-fed3.onrender.com/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black  rounded-lg hover:bg-yellow-400">
                            Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
