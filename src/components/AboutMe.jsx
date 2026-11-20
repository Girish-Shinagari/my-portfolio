import React from "react";

function AboutMe() {
    return (
        <>
            <div id="aboutme" className="text-white m-5 ml-5 text-xl ">
                <h1 className="font-bold text-3xl flex justify-center m-5">About Me</h1>
                <p className="md:px-15 ">I'm an aspiring software developer passionate about building modern, responsive, and user-friendly web applications.
                    I have a background in frontend development using React.js, JavaScript, HTML5, CSS3, and Tailwind CSS.

                    Currently, I'm expanding my skills into backend development with Node.js, Express.js, and MongoDB to become a
                    full-stack developer.</p><br />
                <p className="md:px-15 ">  I'm also interested in Artificial Intelligence and integrating AI-powered features into real-world applications.

                    My goal is to continuously learn new technologies, solve problems, and build innovative applications that combine
                    creativity with technology.
                </p>

                <h1 className="md:px-15 pt-10 text-2xl">Skills : <span className="text-1sm">React.js | Node.js | express.js | MangoDb | JavaScript(ES6) | Tailwindcss</span></h1>
                <h1 className="md:px-15 text-2xl mt-3">Tools : <span className="text-1sm"> Git | Github | vs code</span></h1>

            </div>
        </>
    );
}

export default AboutMe;