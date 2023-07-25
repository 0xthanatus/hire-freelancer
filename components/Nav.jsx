import { navLinks } from "@/constants/NavLinks";
import Image from "next/image";
import navImage from "/public/seqrhive_logo-nobg.png";
import joinImage from "../public/robo-3.png";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

function NavBar() {
  return (
    <nav className="flex justify-between p-1 md:p-4 mt-4">
      <Link
        href={"/"}
        className="logo bg-gray-900 p-2 rounded-full w-10 h-10 md:w-12 md:h-12 overflow-hidden"
      >
        <Image
          src={navImage}
          alt="logo"
          className="w-14 hover:scale-150 cursor-pointer transition-all duration-200 ease-in"
        />
      </Link>
      <div className="flex items-center">
        <div className="px-5">
          <button
            onClick={() =>
              (window.location.href = `https://api.whatsapp.com/send?phone=${+918590475775}&text=${"Hello"}`)
            }
            type="button"
          >
            <FaWhatsapp className="w-5 h-5 mr-3" />
          </button>

          <button
            onClick={() =>
              (window.location.href = `mailto:${"gr3ys3c@gmail.com"}`)
            }
            type="button"
          >
            <MdOutlineEmail className="w-5 h-5 mr-3 outline-gray-100" />
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/seqrhive/?igshid=MzRlODBiNWFlZA%3D%3D")
            }
          >
            <FiInstagram className="w-5 h-5 outline-gray-100" />
          </button>
        </div>
        <Link
          href={"/contact"}
          className="join px-4 py-2 bg-[#485ED8] rounded-lg shadow-lg h-fit flex"
        >
          <span>Contact Us</span>
        </Link>
      </div>

      {/* <ul className=" gap-12 items-center justify-center text-lg hidden md:flex">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className="blue-h transition-colors duration-200 ease-in-out"
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul> */}
    </nav>
  );
}

export default NavBar;
