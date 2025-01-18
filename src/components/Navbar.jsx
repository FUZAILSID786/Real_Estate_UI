import React, { useState } from 'react'

const Navbar = () => {
    const [open,setOpen] = useState(false);
  return (
      <nav class="h-24 flex justify-between items-center">
      <div class="left w-2/3 flex items-center gap-11 font-bold">
        <a href="/" class="font-bold text-lg flex gap-2.5 items-center transition-all duration-300 ease hover:scale-105">
            <img class="w-7" alt src="logo.png"/>
            <div class="max-md:block max-lg:hidden">Propsource</div>
        </a>
        <a href="/" class="transition-all duration-300 ease hover:scale-105 max-md:hidden">Home</a>
        <a href="/" class="transition-all duration-300 ease hover:scale-105 max-md:hidden">About</a>
        <a href="/" class="transition-all duration-300 ease hover:scale-105 max-md:hidden">Contact</a>
        <a href="/" class="transition-all duration-300 ease hover:scale-105 max-md:hidden">Agents</a>
      </div>
      <div class="right w-2/6 flex items-center justify-end bg-orange-100 h-full font-bold max-lg:bg-transparent">
      <a href="/" class="transition-all duration-300 ease hover:scale-105 m-5 max-md:hidden">Sign In</a>
      <a href="/" class="bg-yellow-400 pt-3 pb-3 pl-6 pr-6 m-5 transition-all duration-300 ease hover:scale-105 max-md:hidden">Sign Up</a>
      </div>
      <div class="menuIcon z-50">
        <img class="hidden max-md:block w-9 h-9  cursor-pointer" src="/menu.png" onClick={() => setOpen((prev)=> !prev)} />
      </div>
      <div class={open ? "menu hidden max-md:flex absolute top-0 -right-1/2 bg-black text-white h-screen w-2/5 transition-all duration-300 ease-in flex-col justify-center items-center text-2xl gap-7":"menu hidden max-md:flex flex-col absolute top-0 right-0 bg-black text-white h-screen w-2/5 transition-all duration-300 ease-in justify-center items-center text-xl font-bold gap-7"}>
      <a href="/" class="transition-all duration-300 ease hover:scale-105 max-md:inline">Home</a>
      <a href="/" class="transition-all duration-300 ease hover:scale-105 max-md:inline">About</a>
      <a href="/" class="transition-all duration-300 ease hover:scale-105 max-md:inline">Contact</a>
      <a href="/" class="transition-all duration-300 ease hover:scale-105 max-md:inline">Agents</a>
      <a href="/" class="transition-all duration-300 ease hover:scale-105 max-md:inline">Sign in</a>
      <a href="/" class="transition-all duration-300 ease hover:scale-105 max-md:inline">Sign up</a>
      </div>
      </nav>
  )
}

export default Navbar
