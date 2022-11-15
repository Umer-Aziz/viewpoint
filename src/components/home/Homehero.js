import React from "react";
import { WiTime8 } from "react-icons/wi";
import PostSwitcher from "./PostSwitcher";

const Homehero = () => {
  return (
    <>
      <section className="container mx-auto py-10 text-gray-700 dark:text-gray-300">
        <div className="grid gap-y-6 sm:flex sm:gap-x-6">
          <div className="grid gap-y-6 lg:flex sm:gap-x-6 lg:gap-x-6">
            {/* main div */}
            <div className="sm:max-w-xl xl:min-w-[38rem] shadow rounded group cursor-pointer">
              <div className="max-h-80 lg:max-h-max overflow-hidden">
                <img
                  className="sm:min-h-[18rem] xl:min-h-[22rem] bg-cover object-cover group-hover:scale-105 transition-all duration-500"
                  src="https://media.istockphoto.com/photos/future-technology-3d-concept-automated-retail-warehouse-agv-robots-picture-id1349338733?k=20&m=1349338733&s=612x612&w=0&h=EuiGg8nr_VxK0uhT1JBHAGny-tnt-kALqZQaQBssFrQ="
                  alt="blog-post"
                />
              </div>
              <div className="px-3 sm:px-4 pb-4">
                <p className="mt-3 font-semibold text-orange-600 text-sm">
                  Technology
                </p>
                <h3 className="my-2 text-2xl font-semibold blog-title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus veniam numquam tempora labore quasi. Maiores
                  facilis natus ut illum sed amet aliquam in quo.
                </p>
                <div className="mt-2 flex gap-x-3">
                  <span className="font-semibold">Admin</span>
                  <p className="flex items-center gap-x-1 text-gray-500">
                    <WiTime8 className="text-sm" />
                    <span className="text-sm font-semibold">
                      12 November, 2022
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:max-w-xs shadow rounded group cursor-pointer">
              <div className="max-h-72 overflow-hidden">
                <img
                  className="bg-center object-cover xl:h-72 w-full group-hover:scale-105 transition-all duration-500"
                  src="https://media.istockphoto.com/photos/shot-of-a-unrecognizable-person-using-on-a-laptop-in-a-dark-room-picture-id1334405339?k=20&m=1334405339&s=612x612&w=0&h=Ivid-UKf_jJwUCRcDkSVlJCHI3w2pWc3fcgGxxvur1I="
                  alt="blog-post"
                />
              </div>
              <div className="px-3 sm:px-4 pb-3">
                <p className="mt-3 font-semibold text-orange-600 text-sm">
                  Cybersecurity
                </p>
                <h3 className="my-2 text-xl font-semibold blog-title">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus veniam numquam tempora labore quasi. Maiores
                  facilis natus ut illum sed amet aliquam in quo.
                </p>
                <div className="mt-2 flex gap-x-3">
                  <span className="font-semibold">Admin</span>
                  <p className="flex items-center gap-x-1 text-gray-500">
                    <WiTime8 className="text-sm" />
                    <span className="text-sm font-semibold">
                      12 November, 2022
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

<PostSwitcher/>
          
        </div>
      </section>
    </>
  );
};

export default Homehero;
