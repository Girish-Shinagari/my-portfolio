import React, { useState } from "react";
import logo from '../assets/logo.png'


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    function handleMenu() {
        setMenuOpen(!menuOpen)
    }

    return (
        <>

            <div className="w-full h-18 items-center bg-[linear-gradient(120deg,#030B1C,#071A36,#0B2D55)] flex relative ">
                <img className="w-20 h-12" src={logo} alt="" />

                <div className="text-white md:hidden absolute right-5 cursor-pointer" onClick={() => { handleMenu() }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    >
                        {menuOpen ? (
                            <path d="M18 6L6 18M6 6l12 12" />
                        ) : (
                            <path d="M3 6h18M3 12h18M3 18h18" />
                        )}
                    </svg>
                </div>

                <div className=" justify-end w-full items-center pr-10 hidden md:flex ">
                    <ul className="box-border text-white flex justify-between gap-10">
                        <li className="nav-links" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</li>
                        <li className="nav-links" onClick={() => document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' })}>About Me</li>

                        <li className="nav-links" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</li>
                        <li className="nav-links" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</li>
                    </ul>
                </div>
            </div>

            {menuOpen && (
                <div className="absolute right-0 h-full w-30  md:hidden">
                    <ul className="text-white mt-5 flex flex-col gap-3 ">
                        <li className="nav-links"
                            onClick={
                                () => {
                                    setMenuOpen(false);
                                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
                                }}>Home</li>
                        <li className="nav-links"
                            onClick={() => {
                                setMenuOpen(false);
                                document.getElementById('aboutme')?.scrollIntoView({ behavior: 'smooth' })
                            }}>About Me</li>

                        <li className="nav-links"
                            onClick={() => {
                                setMenuOpen(false);
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                            }}>Projects</li>
                        <li className="nav-links"
                            onClick={() => {
                                setMenuOpen(false)
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                            }}>Contact</li>
                    </ul>
                </div>
            )}
        </>
    );
}


export default Navbar