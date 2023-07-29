import { handleHover } from "@/constants/functions";
import Image from "next/image";
import JoinTeamImage from "../public/mobile-app-banner@2x.webp";
import ProgressiveWebApplications from "../public/ill-fremeworks@2x.webp";
import ProgressiveWebApplications2 from "../public/ill-newesttechno@2x.webp";
import StructuredArchitectural from "../public/ill-progressivess@2x.webp";
import GreatWebApps from "../public/iil-webapp-great@2x.webp";
import NavigateWeb from "../public/ill-navigateweb@2x.webp";

import { appDevelopment } from "@/constants";

function WebDevelopment() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold p-2 text-center mt-4 w-8/12">
          <span className="text-[#485ED8]">Web application </span>
          development services using industry leading technologies
        </h1>
      </div>
      <div className="py-8 lg:py-16">
        <div className="flex gap-10 items-center">
          <div className="container lg:bg-none bg-image-join-3 text-center md:text-left">
            <span className="bg-overlay lg:hidden block absolute"></span>
            <div className="md:list-disc flex flex-col md:gap-4 gap-2 text-lg mt-6 bg-overlay z-10 relative">
              <h1 className="text-2xl font-semibold p-2  mt-4">
                Why Choose
                <span className="text-[#485ED8]"> Seqrhive </span>
                for Web Development?
              </h1>
              <p className=""> </p>
              <p>
                We are a web development company that purely focuses on building
                fully functional, robust, and scalable web applications. We
                build custom web apps using the right technology stacks that
                align with your business objectives and help you achieve maximum
                growth. Our end goal is to build quality web applications for
                you that maximize resource utilization at a low cost.
              </p>
            </div>
          </div>
          <Image
            src={JoinTeamImage}
            alt="join team"
            className="w-[460px] hidden lg:block"
          />
        </div>

        <div className="flex justify-center pt-5 pb-10">
          <h1 className="text-3xl font-semibold p-2 text-center mt-4 w-8/12">
            Custom Web Application
            <span className="text-[#485ED8]"> Development </span>
            Offerings
          </h1>
        </div>
        <div className="grid px-6 grid-cols-1 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
          {appDevelopment.map((x, idx) => (
            <div
              key={idx}
              class="bg-gray-200 min-h-[13rem] rounded-lg p-4 transition-padding duration-500 hover:pt-0 hover:pb-6"
            >
              <h2 class="text-xl font-semibold mb-2 min-h-[3.5rem] text-black">
                {x.title}
              </h2>
              <p class="text-gray-700">{x.description}</p>
            </div>
          ))}
        </div>

        <div className="grid px-6 grid-cols-1 md:px-0 md:grid-cols-2 gap-10 md:gap-5 pt-16">
          <div>
            <Image
              src={ProgressiveWebApplications}
              alt="join team"
              className="w-[460px]"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold p-2 text-center my-4">
              <span className="text-[#485ED8]"> Progressive </span> web
              applications using modern frameworks
            </h1>
            <p>
              We have over a decade of experience in building world-class B2B
              and B2C applications focusing on M&E, Healthcare, Fintech,
              Transportation, RTC, AdTech, e-Learning, and data analytics.
            </p>
          </div>
          <div className="hidden md:block md:translate-x-32 lg:translate-x-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="662"
              height="160"
              viewBox="0 0 662 160"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill-rule="nonzero"
                  stroke="#D4DFFF"
                  stroke-dasharray="10,5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M647.092 132.613C615.156 65.73 505.264 50.012 317.416 85.46 123.567 107.748 22.455 87.587 14.079 24.975"
                />
                <path fill="#D4DFFF" d="M15 0l15 15-15 15L0 15z" />
                <circle
                  cx="647"
                  cy="145"
                  r="15"
                  fill="#D4DFFF"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="grid px-6 grid-cols-1 md:px-0 md:grid-cols-2 gap-10 md:gap-5 pt-16">
          <div>
            <p>
              Our web app engineering team has delivered products to over 400
              clients, including global brands such as Google, Pepsi, Hilton,
              Redbull, and Sony Music. Our technology stack includes the newest
              technologies such as React.js, Angular.js, Vue.js, PostgreSQL,
              Python, MongoDB, Node.js, etc.
            </p>
          </div>
          <div>
            <Image
              src={ProgressiveWebApplications2}
              alt="join team"
              className="w-[460px]"
            />
          </div>
          <div className="hidden md:block md:translate-x-32 lg:translate-x-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="542"
              height="159"
              viewBox="0 0 542 159"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill-rule="nonzero"
                  stroke="#D4DFFF"
                  stroke-dasharray="10,5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16.026 129c5.676-52.921 90.96-70.707 255.852-53.356 158.93 16.723 244.223.63 255.879-48.28"
                />
                <path fill="#D4DFFF" d="M15 129l15 15-15 15-15-15z" />
                <circle
                  cx="527"
                  cy="15"
                  r="15"
                  fill="#D4DFFF"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="grid px-6 grid-cols-1 md:px-0 md:grid-cols-2 gap-10 md:gap-5 pt-16">
          <div>
            <Image
              src={StructuredArchitectural}
              alt="join team"
              className="w-[460px]"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold p-2 text-center my-4">
              Structured <span className="text-[#485ED8]"> architectural </span>{" "}
              patterns for developing systems at scale
            </h1>
            <p>
              We help build large scale web applications adhering to Google’s
              definition of “progressiveness”, making them fast even on 2G
              networks, offline-available and easily installable across devices.
            </p>
          </div>
          <div className="hidden md:block md:translate-x-32 lg:translate-x-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="662"
              height="160"
              viewBox="0 0 662 160"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill-rule="nonzero"
                  stroke="#D4DFFF"
                  stroke-dasharray="10,5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M647.092 132.613C615.156 65.73 505.264 50.012 317.416 85.46 123.567 107.748 22.455 87.587 14.079 24.975"
                />
                <path fill="#D4DFFF" d="M15 0l15 15-15 15L0 15z" />
                <circle
                  cx="647"
                  cy="145"
                  r="15"
                  fill="#D4DFFF"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="grid px-6 grid-cols-1 md:px-0 md:grid-cols-2 gap-10 md:gap-5 pt-16">
          <div>
            <h1 className="text-3xl font-semibold p-2 text-center my-4">
              Great <span className="text-[#485ED8]"> Web apps </span> start
              with great front-end
            </h1>
            <p>
              Slow load times, poor performance, and dated UX design can impact
              your bottom line. Your business depends on providing
              differentiated and engaging experiences.
            </p>
          </div>
          <div>
            <Image src={GreatWebApps} alt="join team" className="w-[460px]" />
          </div>
          <div className="hidden md:block md:translate-x-32 lg:translate-x-64">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="542"
              height="159"
              viewBox="0 0 542 159"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill-rule="nonzero"
                  stroke="#D4DFFF"
                  stroke-dasharray="10,5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16.026 129c5.676-52.921 90.96-70.707 255.852-53.356 158.93 16.723 244.223.63 255.879-48.28"
                />
                <path fill="#D4DFFF" d="M15 129l15 15-15 15-15-15z" />
                <circle
                  cx="527"
                  cy="15"
                  r="15"
                  fill="#D4DFFF"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="grid px-6 grid-cols-1 md:px-0 md:grid-cols-2 gap-10 md:gap-5 pt-16">
          <div>
            <Image src={NavigateWeb} alt="join team" className="w-[460px]" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold p-2 text-center my-4">
              Navigate web complexities with{" "}
              <span className="text-[#485ED8]"> experienced </span> consultants
            </h1>
            <p>
              There are a lot of firms that can build web apps. But there are
              few who can develop world-class web apps that will drive results.
              Our team coaches you through every tech decision critical to you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebDevelopment;
