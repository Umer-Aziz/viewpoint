import React from "react";
import { FaGithub , FaLinkedin , FaTwitter ,  FaStackOverflow } from "react-icons/fa";

export const Footer = () => {
    return (
      <div className="bg-gray-100 dark:bg-gray-600 dark:bg-opacity-5">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 xl:max-w-7xl 2xl:px-0">
          <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-medium tracking-wide dark:text-gray-300 text-gray-600">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Games
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      References
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium tracking-wide dark:text-gray-300 text-gray-600">Apples</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Web
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      eCommerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium tracking-wide dark:text-gray-300 text-gray-600">Cherry</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Brochure
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Nonprofit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Educational
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium tracking-wide dark:text-gray-300 text-gray-600">
                  Business
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Infopreneur
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Personal
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Wiki
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
                    >
                      Forum
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 md:max-w-md lg:col-span-2">
              <span className="text-base font-medium tracking-wide dark:text-gray-300 text-gray-600">
                Subscribe for updates
              </span>
              <form className="flex flex-col mt-4 md:flex-row">
                <input
                  placeholder="Email"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-gray-50 text-gray-600 border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-orange-600 border border-orange-600 hover:bg-orange-600 hover:text-gray-100 transition-all duration-500 rounded outline-none"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-500">
                Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken
                spare ribs salami.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-dark sm:flex-row">
            <p className="text-sm text-gray-500 text-center md:text-start">
              © Copyright 2023 Viewpoint Inc. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-end mt-4 space-x-4 sm:mt-0 text-md md:text-lg text-gray-500 dark:text-gray-300">
                    <FaLinkedin className='cursor-pointer hover:text-blue-500'/>
                    <FaGithub className='cursor-pointer hover:text-gray-700 dark:hover:text-gray-400'/>
                    <FaStackOverflow className='cursor-pointer hover:text-orange-600'/>
                    <FaTwitter className='cursor-pointer hover:text-blue-500'/>
            </div>
          </div>
        </div>
      </div>
    );
  };