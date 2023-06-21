import { security } from "@/constants";
import { handleHover } from "@/constants/functions";
import Testing from "./Testing";
import WhatWeTest from "./WhatWeTest";

function Security() {
  return (
    <>
      <WhatWeTest />
      <div className="security services my-20">
        <div className="flex items-center gap-2">
          <div>
            <h1 className="text-4xl font-semibold after-underline">
              <span className="text-[#485ED8]">Security</span>
            </h1>
            <p className="mt-6 text-lg max-w-4xl">
              Collaborate with one of the top penetration testing companies in
              India and USA for optimal risk management. We offer a complete
              range of security and penetration testing services to generate
              smart, simplistic, and safer user experiences.
            </p>
          </div>
          <div className="hidden md:block">
            {/* <Image src={roboImage} alt="robo" width={200} className="" /> */}
          </div>
        </div>
        <div className="service-list mt-10 flex gap-6 flex-wrap  ">
          {security?.map((service, index) => (
            <div
              className="w-[360px] service--list--item hover-card cursor-pointer"
              key={index}
              onMouseMove={(e) => handleHover(e)}
            >
              <span className="hover-el-light"></span>
              <div
                className="overflow-hidden inline-block rounded-xl cursor-pointer hover-card h-16 w-20"
                onMouseMove={(e) => handleHover(e)}
              >
                <span className={`sprite-icon-2  ${"item-2-" + index} `}></span>
                <span className="hover-el-2 "></span>
              </div>
              <h2 className="text-xl font-semibold">{service?.title}</h2>
              <p className="mt-4 text-lg">{service?.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Testing />
    </>
  );
}

export default Security;
