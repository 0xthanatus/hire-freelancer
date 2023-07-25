import { handleHover } from "@/constants/functions";
import Image from "next/image";
import JoinTeamImage from "../public/19362653-removebg-preview.png";
import AndroidAppDevelopment from "../public/offerings-android-app-thumb@2x.webp";
import IosAppDevelopment from "../public/iosApp.png";
import HybridAppDevelopment from "../public/hybrid.png";

import { appDevelopment } from "@/constants";

function AddDevelopment() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold p-2 text-center mt-4 w-8/12">
          <span className="text-[#485ED8]">Mobile application </span>
          development services for better and innovative experiences
        </h1>
      </div>
      <div className="py-8 lg:py-16">
        <div className="flex gap-10 items-center">
          <div className="container lg:bg-none bg-image-join-2 text-center md:text-left">
            <span className="bg-overlay lg:hidden block absolute"></span>
            <div className="md:list-disc flex flex-col md:gap-4 gap-2 text-lg mt-6 bg-overlay z-10 relative">
              <p>
                In a mobile-dominating world, customers and workers want more
                ways to engage with the audience, grow the brand and build apps
                to meet their needs, faster.
              </p>
              <p>Why SeqrHive is Perfect for Mobile App Development?</p>
              <p>
                Seqrhive’s mobile app development services allow organizations
                and businesses to build innovative and user-friendly
                applications. Our team of expert software engineers and
                developers craft scalable and reliable mobile app solutions to
                improve your company's capabilities.
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
            <span className="text-[#485ED8]">Mobile app </span>
            development offering
          </h1>
        </div>
        <div className="grid px-6 grid-cols-1 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
          {appDevelopment.map((x, idx) => (
            <div
              key={idx}
              class="bg-gray-200 min-h-[13rem] rounded-lg p-4 transition-padding duration-500 hover:pt-6 hover:pb-6"
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
              src={IosAppDevelopment}
              alt="join team"
              className="w-[460px]"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold p-2 text-center my-4">
              iOS App Development Services
            </h1>
            <p>
              iOS application is known for its enhanced native experience, and
              at SeqrHive, we make sure to maintain the same feature-rich
              capabilities on your apps. Our team of iOS app developers creates
              reliable applications that meet the intune compliance requirements
              across email, device health, device properties, and system
              security.
              <br />
              We offer iOS mobile application development services across Apple
              devices like iPhones, iPad, and others. Our iOS app development
              services involve,
            </p>
            <ul className="py-5 list-disc px-4">
              <li>
                iOS UI/UX design for a uniform experience across Apple devices.
              </li>
              <li>
                Feature customizations and tailored mobile application
                development.
              </li>
              <li>
                Advanced iOS testing with a dedicated Quality Assurance team.
              </li>
              <li>Third-party integrations with custom APIs.</li>
              <li>Deployments across Apple devices.</li>
              <li>
                Optimized delivery through enhanced CI/CD methods for smooth
                functioning.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid px-6 grid-cols-1 md:px-0 md:grid-cols-2 gap-10 md:gap-5 pt-16">
          <div>
            <h1 className="text-3xl font-semibold p-2 text-center my-4">
              Android App Development Services
            </h1>
            <p>
              SeqrHive provides unmatched Android app development services
              fueled by evolutionary architecture and innovations. Our
              end-to-end solutions are highly customizable and cater to a wide
              range of business requirements.
              <br />
              So whether you need standalone, native, web-based, or
              database-driven applications, we deliver high-end mobile
              application development services. At Seqrhive, we can help your
              enterprise meet ever-changing market demands through,
            </p>
            <ul className="py-5 list-disc px-4">
              <li>
                Well-defined process flow and intelligent development
                strategies.
              </li>
              <li>
                Highly secure apps which are compliant with major data
                regulations.
              </li>
              <li>
                A dedicated team that works as an extension of your
                organization.
              </li>
              <li>
                Rigorous mobile application testing with QA best practices.
              </li>
              <li>Deployments across Android ecosystem devices.</li>
              <li>Cloud-based integrations and customized tools.</li>
            </ul>
          </div>
          <div>
            <Image
              src={AndroidAppDevelopment}
              alt="join team"
              className="w-[460px]"
            />
          </div>
        </div>
        <div className="grid px-6 grid-cols-1 md:px-0 md:grid-cols-2 gap-10 md:gap-5 pt-16">
          <div>
            <Image
              src={HybridAppDevelopment}
              alt="join team"
              className="w-[460px]"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold p-2 text-center my-4">
              Hybrid app development
            </h1>
            <p>
              Hybrid app development encapsulates web-based services in
              applications that offer native features and capabilities. Hybrid
              app developers at SeqrHive are experienced in creating interactive
              and engaging applications across different platforms.
              <br />
              We develop reusable components customized as per your company's
              requirements to deploy hybrid apps across native platforms. Our
              hybrid app development services include, but are not limited to,
            </p>
            <ul className="py-5 list-disc px-4">
              <li>User-interacting UI/UX design for higher user engagement.</li>
              <li>
                Native features which are compatible across multiple operating
                systems.
              </li>
              <li>Hybrid application prototyping and testing.</li>
              <li>Streamlined deployments using CI/CD approach.</li>
              <li>Version updates and feature addition support.</li>
              <li>
                Integrations of third-party services as per business
                requirements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDevelopment;
