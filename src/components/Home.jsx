import React from "react";
import Typewriter from 'typewriter-effect'
import hero_img from "../assets/hero_photo.png"

function Home() {
    return (
        <>
            <div className="w-full h-full flex text-white relative">
                <div className="w-1/3 h-full ">
                    <img src={hero_img} alt="" />
                </div>

                <div className="p-20 ">
                    <h1 className="text-2xl">Hi, I'm</h1>
                    <h1 className="text-3xl">Girish Shinagari</h1><br />
                    <Typewriter className="text-2xl text-[#38BDF8]"
                    options={{
                        strings:['Aspiring MERN Stack Developer'],
                        autoStart:true,
                        loop:true,
                        delay:75,
                    }}
                    />
                    <p>I build responsive, interactive, and user-friendly web applications using modern web technologies.<br></br> I'm passionate about MERN Stack Development and continuously learning new technologies to grow as a developer.</p>
                    <div className="absolute bottom-20 flex gap-2">
                    <button className="box-border bg-[#0B2D55] hover:bg-[#071A36] rounded-full px-2 py-1 cursor-pointer">Explore My Projects</button>
                    <button className="box-border bg-[#0B2D55] hover:bg-[#071A36] rounded-full px-2 py-1 cursor-pointer">Contact</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;