import React from "react";
import Typewriter from 'typewriter-effect'
import hero_img from "../assets/hero_photo.png"

function Home() {
    return (
        <section id="home" className="w-full h-full overflow-hidden text-white">
            <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-8 px-5 py-10 sm:px-8 md:flex-row md:gap-10 md:px-12 lg:gap-16 lg:px-16">
                <div className="order-2 w-full md:order-1 md:w-3/5 lg:w-1/2">
                    <p className="mb-2 text-lg font-medium sm:text-xl">Hi, I'm</p>
                    <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                        Girish Shinagari
                    </h1>

                    <div className="mt-4 min-h-8 text-xl font-semibold text-[#38BDF8] sm:text-2xl">
                        <Typewriter
                            options={{
                                strings: ['Aspiring MERN Stack Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                            }}
                        />
                    </div>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:text-base md:mt-6 md:text-lg">
                        I build responsive, interactive, and user-friendly web applications using modern web technologies.
                        I'm passionate about MERN Stack Development and continuously learning new technologies to grow as a developer.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <button
                            type="button"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="rounded-full border border-[#38BDF8]/30 bg-[#0B2D55] text-center px-5 py-3 text-sm font-semibold transition-colors hover:bg-[#123D6D] sm:w-auto sm:text-base"
                        >
                            Explore My Projects
                        </button>
                        <button
                            type="button"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="rounded-full border border-white/20 text-center px-5 py-3 text-sm font-semibold transition-colors hover:border-white/50 hover:bg-white/10 sm:w-auto sm:text-base"
                        >
                            Contact
                        </button>
                    </div>
                </div>

                <div className="order-1 flex w-full justify-center md:order-2 md:w-2/5 lg:w-1/2">
                    <img
                        src={hero_img}
                        alt="Girish Shinagari"
                        className="h-52 w-52 rounded-full object-cover object-top shadow-2xl ring-4 ring-white/10 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-[420px] lg:w-[420px] lg:rounded-[3rem]"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;