import { handleHover } from "@/constants/functions";
import Image from "next/image";
import JoinTeamImage from "../public/19362653-removebg-preview.png";
import { appDevelopment } from "@/constants";

function AddDevelopment() {
  return (
    <>
      <div className="py-8 lg:py-16">
        <h1 className="text-3xl font-semibold p-2 text-center mt-4">
          <span className="text-[#485ED8]">Mobile App </span>
          Development
        </h1>
        <div className="flex gap-10 items-center">
          <div className="container lg:bg-none bg-image-join-2 text-center md:text-left">
            <span className="bg-overlay lg:hidden block absolute"></span>
            <div className="md:list-disc flex flex-col md:gap-4 gap-2 text-lg mt-6 bg-overlay z-10 relative">
              <p>
                Seqrhive creates high-quality mobile applications that are both
                feature-rich and user-friendly. We provide multi-dimensional
                mobile app development services, taking insights from many
                viewpoints on business, technology, end-users, and so on.
              </p>
              <div></div>
            </div>
          </div>
          <Image
            src={JoinTeamImage}
            alt="join team"
            className="w-[460px] hidden lg:block"
          />
        </div>
        <div className="service-list mt-10 flex gap-6 flex-wrap justify-around ">
          {appDevelopment?.map((service, index) => (
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
                <span className={`sprite-icon-2  ${"item-4-" + index} `}></span>
                <span className="hover-el-2 "></span>
              </div>
              <h2 className="text-xl font-semibold">{service?.title}</h2>
              <p className="mt-4 text-lg">{service?.description}</p>
            </div>
          ))}
        </div>
        <div className="h-2"></div>
      </div>
    </>
  );
}

export default AddDevelopment;
