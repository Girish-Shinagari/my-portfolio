import React from "react";

function Contact() {
    return (
        <div id="contact" className="text-white mx-5 md:px-5  text-xl">
            <div>
                <h1 className="text-3xl text-bold text-center">Get In Touch</h1>
                <p className="font-thin indent-10 mt-5" >I'm currently looking for internship and entry-level roles in MERN Stack Development, and I enjoy collaborating on web applications and AI-powered tools. Whether you have an opportunity, a project idea, or just want to connect, feel free to send a message I'll get back to you soon.</p>
                <div className="mt-5 border border-white rounded-xl p-5">
                    <p>Cell : <span className="font-thin">7676464403</span> </p>

                    <p>Email : <span className="font-thin text-sm">girishshinagari91@gmail.com</span> </p>
                    <p>Github : <a href="https://github.com/Girish-Shinagari" className="font-thin text-sm">https://github.com/Girish-Shinagari</a> </p>
                    <p>Linkedin : <a href="https://www.linkedin.com/in/girish-shinagari" className="font-thin text-sm">https://www.linkedin.com/in/girish-shinagari</a> </p>
                    <p>Location : <span className="font-thin">Dharwad, Karnataka</span> </p>

                </div>
            </div>

            <div className="border border-white rounded-xl mt-5 p-5 text-white ">
                <form action="submit" className="flex flex-col">
                    <input type="text" value='name' placeholder="Enter your name" className="border border-white p-2 m-2 rounded-full" />
                    <input type="text" value='number' placeholder="Phone number" className="border border-white p-2 m-2 rounded-full" />
                    <input type="emial" value='email' placeholder="Email" className="border border-white p-2 m-2 rounded-full" />
                    <input type="textarea" value='massage' placeholder="massage" className="border border-white p-2 m-2 rounded-full" />
                    <input type="submit" className="block mx-auto mt-4 border border-white p-2 rounded-full text-center" />
                </form>
            </div>
<p className="font-thin text-center text-sm p-10">Designed & Built with React.js and Tailwind CSS</p>
           </div>
    );
}

export default Contact;