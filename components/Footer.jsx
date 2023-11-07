import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Seqrhive
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex">
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
                "https://www.instagram.com/__sejoy_ner__/?r=nametag")
            }
          >
            <FiInstagram className="w-5 h-5 outline-gray-100" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
