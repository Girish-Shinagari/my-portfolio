import React from "react";
import resume from '../assets/Girish_Shinagari_Resume.pdf'

function AboutMe() {
    return (
        <>
            <div id="aboutme" className="text-white m-5 md:mx-10 ml-5 text-xl font-thin">
                <h1 className="font-bold text-3xl text-center m-5">About Me</h1>
                <p className="">I'm an aspiring MERN Stack developer passionate about building modern, responsive, and user-friendly web applications.
                    I have a background in frontend development using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.

                    Currently, I'm expanding my skills into backend development with Node.js, Express.js, and MongoDB to become a
                    full-stack developer.</p><br />
                <p className=" ">  I'm also interested in Artificial Intelligence and integrating AI-powered features into real-world applications.

                    My goal is to continuously learn new technologies, solve problems, and build innovative applications that combine
                    creativity with technology.
                </p>

                <h1 className="text-2xl  mt-3 underline">Education :</h1>
                <p className=" mt-2">Bachelor of Science in Computer Science <span className="text-sm">(2024 - present)</span></p>
                <p className="text-2md">College : <span className="text-md">JSS SMI ug & pg Studies, Vidyagiri,Dharwad - 580004</span></p>
                <p className="text-2md">University : <span className="text-md">Karnataka University Dharwad (KUD)</span></p>

                <h1 className=" pt-5 text-2xl">Skills : <span className="text-1sm">React.js | Node.js | express.js | MangoDb | JavaScript(ES6) | Tailwindcss</span></h1>
                <h1 className=" text-2xl mt-3">Tools : <span className="text-1sm"> Git | Github | vs code</span></h1>
               <div className=" mt-7 ">
                    <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/20 text-center px-5 py-3 text-sm font-semibold transition-colors hover:border-white/50 hover:bg-white/10 sm:w-auto sm:text-base "
                    >
                       Resume
                    </a>
                    </div>
            </div>
        </>
    );
}

export default AboutMe;