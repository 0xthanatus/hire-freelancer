import React from "react";

function Landing() {
  return (
    <div className="landing">
      <div className="bg-blur-grad mt-24 md:mt-28 ">
        <div className=" text-center md:text-left">
          <h1 className="text-4xl  lg:text-5xl font-bold">
            With SeqrHive, secure your
            <span className="text-[#485ED8]">
              {" "}
              cyberspace <br />
            </span>{" "}
            and your <span className="text-[#485ED8]"> digital</span> life
          </h1>
          <p className="text-lg md:text-xl mt-9  max-w-[900px] ">
            In today's interconnected and technology-driven landscape, ensuring
            the safety and confidentiality of our digital assets has become more
            essential than ever. We, at SeqrHive, are dedicated to protecting
            your system, application, or your network from potential security
            breaches and vulnerabilities. With high-end penetration testing
            services, we make it cent per cent sure that your business-critical
            data stays beyond the reach of hackers.
          </p>
          {/* <div className="flex mt-20  w-fit border border-blue-500 rounded-lg overflow-hidden hover-card">
            <div className="flex md:w-[300px]">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0  dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                @
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none outline-none bg-gray-50 border border-gray-300 text-gray-900  f block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Your Email Address..."
              />
            </div>
            <button
              className="px-6 py-2  blue-h-border rounded-r-lg cursor-pointer z-10 hover:bg-[#485ED8] hover:text-white transition-all duration-200 ease-in-out"
              onClick={() => alert("1")}
            >
              Get Started
            </button>
          </div> */}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Landing;
