// import Image from 'next/image'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

const container1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='min-h-[100vh]'>
            <img src="https://wallpaperaccess.com/full/260161.jpg" className='absolute z-[-5] min-h-[100vh] w-full' />

            <div className='flex justify-between py-8'>
                <h1 className="font-semibold text-3xl md:text-4xl ml-5">The Room</h1>

                <ul className={`transition ease-in-out duration-9000 rounded-xl bg-theorange my-auto ${isMenuOpen ? 'block right-0 w-full top-[85px] text-center z-10 absolute' : 'hidden top-[20px]'} md:flex md:bg-transparent md:static md:w-auto`}>
                    <li className="md:mx-4 text-white md:text-black md:py-0 md:px-2 py-3 hover:bg-cyan-400 md:hover:bg-theorange rounded-xl lg:mx-10 leading-8 font-semibold hover:cursor-pointer">Home</li>
                    <li className="md:mx-4 text-white md:text-black md:py-0 md:px-2 py-3 hover:bg-cyan-400 md:hover:bg-theorange rounded-xl lg:mx-10 leading-8 font-semibold hover:cursor-pointer">Product</li>
                    <li className="md:mx-4 text-white md:text-black md:py-0 md:px-2 py-3 hover:bg-cyan-400 md:hover:bg-theorange rounded-xl lg:mx-10 leading-8 font-semibold hover:cursor-pointer">About</li>
                    <li className="md:mx-4 text-white md:text-black md:py-0 md:px-2 py-3 hover:bg-cyan-400 md:hover:bg-theorange rounded-xl lg:mx-10 leading-8 font-semibold hover:cursor-pointer">Contact</li>
                </ul>

                <p className="block md:hidden my-auto text-2xl cursor-pointer mr-5" onClick={toggleMenu}><FaBars /></p>
            </div>

            <div class="flex justify-around items-center h-[78vh] flex-wrap mt-0">
                <div class="mt-7 p-2">
                    <h1 className='font-bold md:font-normal text-center md:text-left text-4xl md:text-5xl lg:text-7xl'>INTERIOR IN<br/>YOUR HOUSE</h1>
                    <p class="my-5 text-center md:text-left">CHOOSE FOR YOURSELF SOMETHING NEW</p>
                    <button className='bg-theorange font-semibold text-2xl md:text-2xl px-10 text-white rounded-lg w-full md:w-auto'>MORE</button>
                </div>
            
                <div class="ml-5 w-[65%] md:w-[30%]">
                    <img src="/kursi.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default container1
