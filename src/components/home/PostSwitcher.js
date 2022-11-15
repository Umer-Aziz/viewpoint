import React,{useState} from 'react'
import { WiTime8 } from "react-icons/wi";

const PostSwitcher = () => {
    const [show, setShow] = useState(true);
  return (
    <>
        {/* Treding / Latest Post  */}
        <div className="w-auto sm:w-72 md:w-80 xl:w-88">
            <div className="grid grid-cols-2">
              <button
                onClick={() => {
                  setShow(true);
                }}
                className={`text-md font-mono py-1 border rounded-l hover:border-orange-600 hover:text-orange-600 ${
                  show === true
                    ? "text-orange-600 border-orange-600"
                    : "text-gray-500 border-gray-600 border-opacity-50"
                }`}
              >
                TRENDING
              </button>
              <button
                onClick={() => {
                  setShow(false);
                }}
                className={`text-md font-mono py-1 border rounded-r hover:border-orange-600 hover:text-orange-600 ${
                  show === false
                    ? "text-orange-600 border-orange-600"
                    : "text-gray-500 border-gray-600 border-opacity-50"
                }`}
              >
                LATEST
              </button>
            </div>

            {/* Trending Block  */}
            {show === true ? (
              <div className="my-8 trending grid gap-y-6">
                <div className="flex gap-x-3 group cursor-pointer">
                  <div className="h-22 max-w-[8rem] md:w-24 md:w-22 xl:w-28 xl:h-22 rounded-md overflow-hidden">
                    <img
                      className="bg-cover object-cover w-full group-hover:scale-105 transition-all duration-500"
                      src="https://media.istockphoto.com/photos/group-of-business-people-in-office-cafeteria-picture-id1125784640?k=20&m=1125784640&s=612x612&w=0&h=zfl8ueIYN0zJi-3TETjb7kUhpa8jsyiAKFIymir1P8Q="
                      alt="trending-post"
                    />
                  </div>
                  <div className="w-full min-w-[11rem] md:w-44 lg:w-52 -translate-y-1 lg:-translate-y-0.5">
                    <h4 className="text-md font-semibold blog-title">
                      Lorem ipsum dolor sit sot , amet consectetur adipisicing.
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h4>
                    <p className="my-0.5 text-sm font-semibold text-orange-600">
                      LifeStyle
                    </p>
                    <p className="text-sm flex items-center gap-x-1 dark:text-gray-400">
                      <WiTime8 />
                      <span>12 November, 2022</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-3 group cursor-pointer">
                  <div className="h-22 max-w-[8rem] md:w-24 md:w-22 xl:w-28 xl:h-22 rounded-md overflow-hidden">
                    <img
                      className="bg-cover object-cover w-full group-hover:scale-105 transition-all duration-500"
                      src="https://media.istockphoto.com/photos/high-angle-view-asian-colleague-with-indian-coworker-in-wheelchair-a-picture-id1331469785?k=20&m=1331469785&s=612x612&w=0&h=EOXTjSxma3XTCNaEmG5geDfrLi-UTM18i8Ou5pt5Mf4="
                      alt="trending-post"
                    />
                  </div>
                  <div className="w-full min-w-[11rem] md:w-44 lg:w-52 -translate-y-1 lg:-translate-y-0.5">
                    <h4 className="text-md font-semibold blog-title">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </h4>
                    <p className="my-0.5 text-sm font-semibold text-orange-600">
                      Business
                    </p>
                    <p className="text-sm flex items-center gap-x-1 dark:text-gray-400">
                      <WiTime8 />
                      <span>12 November, 2022</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-3 group cursor-pointer">
                  <div className="h-22 max-w-[8rem] md:w-24 md:w-22 xl:w-28 xl:h-22 rounded-md overflow-hidden">
                    <img
                      className="bg-cover object-cover w-full group-hover:scale-105 transition-all duration-500"
                      src="https://media.istockphoto.com/photos/running-on-treadmill-picture-id542197916?k=20&m=542197916&s=612x612&w=0&h=UFLdzG2sz7oX_YKbCaGV6_hXIGF_e7Lzxuw_E5EL3M4="
                      alt="trending-post"
                    />
                  </div>
                  <div className="w-full min-w-[11rem] md:w-44 lg:w-52 -translate-y-1 lg:-translate-y-0.5">
                    <h4 className="text-md font-semibold blog-title">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </h4>
                    <p className="my-0.5 text-sm font-semibold text-orange-600">
                      Fitness
                    </p>
                    <p className="text-sm flex items-center gap-x-1 dark:text-gray-400">
                      <WiTime8 />
                      <span>12 November, 2022</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-3 group cursor-pointer">
                  <div className="h-22 max-w-[8rem] md:w-24 md:w-22 xl:w-28 xl:h-22 rounded-md overflow-hidden">
                    <img
                      className="bg-cover object-cover w-full group-hover:scale-105 transition-all duration-500"
                      src="https://media.istockphoto.com/photos/children-playing-soccer-outdoors-picture-id1321901975?k=20&m=1321901975&s=612x612&w=0&h=Xd0lpN7APrqaT369NBfIYgQ7Hs9BpWNJ2Qk9sbZO8Y0="
                      alt="trending-post"
                    />
                  </div>
                  <div className="w-full min-w-[11rem] md:w-44 lg:w-52 -translate-y-1 lg:-translate-y-0.5">
                    <h4 className="text-md font-semibold blog-title">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </h4>
                    <p className="my-0.5 text-sm font-semibold text-orange-600">
                      Sport
                    </p>
                    <p className="text-sm flex items-center gap-x-1 dark:text-gray-400">
                      <WiTime8 />
                      <span>12 November, 2022</span>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="my-8 trending grid gap-y-6">
                <div className="flex gap-x-3 group cursor-pointer">
                  <div className="h-22 max-w-[8rem] md:w-24 md:w-22 xl:w-28 xl:h-22 rounded-md overflow-hidden">
                    <img
                      className="bg-cover object-cover w-full group-hover:scale-105 transition-all duration-500"
                      src="https://media.istockphoto.com/photos/group-of-business-people-in-office-cafeteria-picture-id1125784640?k=20&m=1125784640&s=612x612&w=0&h=zfl8ueIYN0zJi-3TETjb7kUhpa8jsyiAKFIymir1P8Q="
                      alt="trending-post"
                    />
                  </div>
                  <div className="w-full min-w-[11rem] md:w-44 lg:w-52 -translate-y-1 lg:-translate-y-0.5">
                    <h4 className="text-md font-semibold blog-title">
                      Lorem ipsum dolor sit sot , amet consectetur adipisicing.
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h4>
                    <p className="my-0.5 text-sm font-semibold text-orange-600">
                      Scamming
                    </p>
                    <p className="text-sm flex items-center gap-x-1 dark:text-gray-400">
                      <WiTime8 />
                      <span>12 November, 2022</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-3 group cursor-pointer">
                  <div className="h-22 max-w-[8rem] md:w-24 md:w-22 xl:w-28 xl:h-22 rounded-md overflow-hidden">
                    <img
                      className="bg-cover object-cover w-full group-hover:scale-105 transition-all duration-500"
                      src="https://media.istockphoto.com/photos/high-angle-view-asian-colleague-with-indian-coworker-in-wheelchair-a-picture-id1331469785?k=20&m=1331469785&s=612x612&w=0&h=EOXTjSxma3XTCNaEmG5geDfrLi-UTM18i8Ou5pt5Mf4="
                      alt="trending-post"
                    />
                  </div>
                  <div className="w-full min-w-[11rem] md:w-44 lg:w-52 -translate-y-1 lg:-translate-y-0.5">
                    <h4 className="text-md font-semibold blog-title">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </h4>
                    <p className="my-0.5 text-sm font-semibold text-orange-600">
                      Sport
                    </p>
                    <p className="text-sm flex items-center gap-x-1 dark:text-gray-400">
                      <WiTime8 />
                      <span>12 November, 2022</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
    </>
  )
}

export default PostSwitcher