import React, { useState } from "react";

function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        setStatus("sending");
        fetch("/__forms.html", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Submission failed");
                form.reset();
                setStatus("success");
            })
            .catch(() => setStatus("error"));
    };

    return (
        <div id="contact" className="text-white mx-5 md:px-5  text-xl">
            <div>
                <h1 className="text-3xl text-bold text-center">Get In Touch</h1>
                <p className="font-thin indent-10 mt-5" >I'm currently looking for internship and entry-level roles in MERN Stack Development, and I enjoy collaborating on web applications and AI-powered tools. Whether you have an opportunity, a project idea, or just want to connect, feel free to send a message I'll get back to you soon.</p>
                <div className="mt-5 border border-white rounded-xl p-5">
                    <p>Cell : <span className="font-thin">7676464403</span> </p>

                    <p>Email : <span className="font-thin text-sm">girishshinagari91@gmail.com</span> </p>
                    <p>Github : <a href="https://github.com/Girish-Shinagari" className="font-thin text-sm text-blue">https://github.com/Girish-Shinagari</a> </p>
                    <p>Linkedin : <a href="https://www.linkedin.com/in/girish-shinagari" className="font-thin text-sm text-blue">https://www.linkedin.com/in/girish-shinagari</a> </p>
                    <p>Location : <span className="font-thin">Dharwad, Karnataka</span> </p>

                </div>
            </div>

            <div className="border border-white rounded-xl mt-5 p-5 text-white ">
                <form name="contact" className="flex flex-col" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>Don't fill this out: <input name="bot-field" /></label>
                    </p>
                    <input type="text" name="name" placeholder="Enter your name" required className="border border-white p-2 m-2 rounded-full" />
                    <input type="text" name="number" placeholder="Phone number" className="border border-white p-2 m-2 rounded-full" />
                    <input type="email" name="email" placeholder="Email" required className="border border-white p-2 m-2 rounded-full" />
                    <textarea name="message" placeholder="Message" required rows="4" className="border border-white p-2 m-2 rounded-xl" />
                    <input type="submit" value={status === "sending" ? "Sending..." : "Submit"} disabled={status === "sending"} className="block mx-auto mt-4 border border-white p-2 rounded-full text-center cursor-pointer" />
                    {status === "success" && <p className="text-center mt-3 text-green-400">Thanks! Your message has been sent.</p>}
                    {status === "error" && <p className="text-center mt-3 text-red-400">Something went wrong. Please try again.</p>}
                </form>
            </div>
<p className="font-thin text-center text-sm p-10">Designed & Built with React.js and Tailwind CSS</p>
           </div>
    );
}

export default Contact;