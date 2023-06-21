import { servicesMin } from "@/constants";
import { handleHover } from "@/constants/functions";

function WhatWeTest() {
  return (
    <>
      <div className="grid place-items-center py-8 lg:py-16">
        <h1 className="mb-4 text-3xl md:text-4xl tracking-tight font-bold text-center">
          What We Test
        </h1>
        <p className="font-light text-center sm:text-xl max-w-[900px] my-4">
          We test your system, application, or network for potential security
          breaches and vulnerabilities. We ensure that your business-critical
          data stays beyond the reach of hackers.
        </p>
        <div
          className="items mt-10 bg-white  text-black p-5 rounded-lg cursor-pointer hover-card"
          onMouseMove={(e) => handleHover(e)}
        >
          <div className="hover-el"></div>
          <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-12">
            {servicesMin.map((service, index) => (
              <li
                key={index}
                className="flex flex-col gap-2 items-center w-[90px] text-center"
              >
                <span
                  className={`${
                    "item-" + index
                  } flex flex-col items-center sprite-icon`}
                ></span>
                <p className="font-semibold">{service}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default WhatWeTest;
