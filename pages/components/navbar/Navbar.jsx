import NavItem from "./NavItem";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className=" flex py-4">
      <div
        className="w-3/12 flex  items-center space-x-3"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="bg-sky-500 p-2 w-10 text-center rounded-full text-white">
          <p className="uppercase">m</p>
        </div>
        <p className="font-semibold font-DM text-white text-lg">The Malaka</p>
      </div>

      <ul
        className="w-6/12 flex font-DM space-x-10 justify-center items-center text-base text-white"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        {/* <li className="border-b-2 border-transparent hover:border-b-primary transition">
          <a href="">Top</a>
        </li> */}
        <NavItem href="home">Top</NavItem>
        <NavItem href="forEveryOne">For Everyone</NavItem>
        <NavItem href="benefit">Benefit</NavItem>
        <NavItem href="preview">Preview</NavItem>
        <NavItem href="penulis">Penulis</NavItem>
      </ul>

      <div
        className="w-3/12 flex justify-end items-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <button className="bg-white py-2 hover:bg-primary text-slate-800 hover:text-white transition text-lg font-semibold shadow-md h-full items-center flex px-6 rounded-full">
          <a href="" className="font-DM ">
            Download
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
