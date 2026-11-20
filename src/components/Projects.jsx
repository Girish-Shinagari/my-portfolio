import React from "react";
import moviepic from '../assets/movie(screenshot).png'


function Projects() {
    return (
        <div id="projects" className="text-white mx-5 md:px-5  text-xl">
            <div>
                <h1 className="text-3xl text-white mt-10 text-center font-bold mb-5">Projects</h1>
                <p className="text-[#38BDF8] text-2md font-bold">myMovie</p>
                <div className="flex flex-col lg:flex-row">
                    <img src={moviepic} alt="" className="md:w-1/2  h-full mt-3" />
                    <div className=" mt-3 lg:mx-5">
                        <h4 className="text-[#38BDF8] ">Frontend & API</h4>
                        <p className="font-bold">My Movies — Movie Discovery & Search App</p>
                        <p className="text-1sm mt-3">A responsive movie browsing web application that lets users search films in real time, explore trending titles, and inspect ratings, and synopses through a clean dark-themed interface.</p>
                        <h1 className="text-xl mt-5">Tech Stack :</h1>
                        <h1 className=" text-md">React.js | JavaScript(ES6) | HTML5 & CSS3 | vercel</h1>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <a
                                href="https://my-movies-lyart.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-[#38BDF8]/30 bg-[#0B2D55] text-center px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#123D6D] sm:w-auto sm:text-base"
                            >
                                Live Demo
                            </a>

                            <a
                                href="https://github.com/Girish-Shinagari/myMovies"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-white/20 text-center px-5 py-3 text-sm font-semibold transition-colors hover:border-white/50 hover:bg-white/10 sm:w-auto sm:text-base"
                            >
                                Github Repo
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <hr className="my-10" />

            <div>
                <p className="text-[#38BDF8] text-2md font-bold">My-Portfolio <span className="text-sm text-white font-thin">( it self )</span></p>
                <p className="">A responsive, Portfolio built to showcase my software projects, technical skills, and educational background with clean UI components and smooth section navigation.</p>
                <p>Built modular components in React.js and semantic HTML5. A Consistent Mobile-first responsive layouts with Tailwind CSS</p>
                <div className="text-center mt-7 ">
                    <a
                        href="https://github.com/Girish-Shinagari/my-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 text-center px-5 py-3 text-sm font-semibold transition-colors hover:border-white/50 hover:bg-white/10 sm:w-auto  block md:inline sm:text-base "
                    >
                        Github Repo
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;