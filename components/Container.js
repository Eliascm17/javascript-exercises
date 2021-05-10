import { useState } from "react";
import Link from "next/link";
import AddDropDown from "../components/AddDropDown";
import Icon from "../components/Icon";
import ProfileDropdown from "../components/ProfileDropdown";

const Container = ({ children }) => {
  const [menuopen, setMenuopen] = useState(false);
  return (
    <div className="bg-black-bg h-auto">
      <nav className="bg-black-nav">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Icon
                  name="github"
                  className="hidden md:block w-8 h-8 fill-current text-gray-200 hover:text-gray-400 transition ease-in-out duration-300"
                />
                <button
                  type="button"
                  onClick={() => setMenuopen(!menuopen)}
                  className="md:hidden bg-black-nav inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
                >
                  <svg
                    className="block h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-baseline -space-x-1">
                  <a
                    href="#"
                    className="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm font-medium hover:text-gray-400 transition ease-in-out duration-200"
                  >
                    Pull requests
                  </a>

                  <a
                    href="#"
                    className="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm font-medium hover:text-gray-400 transition ease-in-out duration-200"
                  >
                    Issues
                  </a>

                  <a
                    href="#"
                    className="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm font-medium hover:text-gray-400 transition ease-in-out duration-200"
                  >
                    Marketplace
                  </a>

                  <a
                    href="#"
                    className="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm font-medium hover:text-gray-400 transition ease-in-out duration-200"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
            <div className="md:hidden flex w-full justify-center mx-auto">
              <Icon
                name="github"
                className="w-8 h-8 fill-current text-gray-200 hover:text-gray-400 transition ease-in-out duration-300"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 space-x-8">
                <div className="flex ml-3 relative space-x-4 items-center">
                  <span
                    aria-hidden
                    className="z-0 ml-6 mb-3 h-3 w-3 absolute rounded-full bg-blue-500 border-2 border-black-nav"
                  />
                  <button className=" bg-black-nav rounded-full text-gray-400 hover:text-white focus:outline-none">
                    <svg
                      className="h-5 w-5 stroke-current hover:text-gray-500 transition ease-in-out duration-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#fff"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  <AddDropDown />
                  <ProfileDropdown />
                </div>
              </div>
            </div>
            <div className="mr-2 flex md:hidden">
              <span
                aria-hidden
                className="z-0 ml-2 -mt-0.5 h-3 w-3 absolute rounded-full bg-blue-500 border-2 border-black-nav"
              />
              <button className=" bg-black-nav rounded-full text-gray-400 hover:text-white focus:outline-none">
                <svg
                  className="h-5 w-5 stroke-current hover:text-gray-500 transition ease-in-out duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#fff"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {menuopen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-sm bg-gray-200bg-gray-900 text-white block px-3 py-2 bg-gray-300font-medium border-t-2 border-gray-700 hover:text-gray-300 transition ease-in-out duration-200"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="text-sm bg-gray-200bg-gray-900 text-white block px-3 py-2 bg-gray-300font-medium border-t-2 border-gray-700 hover:text-gray-300 transition ease-in-out duration-200"
              >
                Pull requests
              </a>

              <a
                href="#"
                className="text-sm bg-gray-200bg-gray-900 text-white block px-3 py-2 bg-gray-300font-medium border-t-2 border-gray-700 hover:text-gray-300 transition ease-in-out duration-200"
              >
                Issues
              </a>

              <a
                href="#"
                className="text-sm bg-gray-200bg-gray-900 text-white block px-3 py-2 bg-gray-300font-medium border-t-2 border-gray-700 hover:text-gray-300 transition ease-in-out duration-200"
              >
                Marketplace
              </a>

              <a
                href="#"
                className="text-sm bg-gray-200bg-gray-900 text-white block px-3 py-2 bg-gray-300font-medium border-t-2 border-gray-700 hover:text-gray-300 transition ease-in-out duration-200"
              >
                Explore
              </a>
              <a
                href="#"
                className="text-sm bg-gray-200bg-gray-900 text-white block px-3 py-2 bg-gray-300font-medium border-t-2 border-gray-700 hover:text-gray-300 transition ease-in-out duration-200"
              >
                Codespaces
              </a>
              <a
                href="#"
                className="text-sm bg-gray-200bg-gray-900 text-white block px-3 py-2 bg-gray-300font-medium border-t-2 border-gray-700 hover:text-gray-300 transition ease-in-out duration-200"
              >
                Sponsors
              </a>
              <a
                href="#"
                className="text-sm bg-gray-200bg-gray-900 text-white block px-3 py-2 bg-gray-300font-medium border-t-2 border-gray-700 hover:text-gray-300 transition ease-in-out duration-200"
              >
                Settings
              </a>
            </div>
          </div>
        )}
      </nav>
      <main className="flex flex-col flex-start items-center justify-center px-8 h-full">
        {children}
      </main>
      <div className="flex flex-col flex-start items-center justify-center">
        <div className="max-w-4xl w-5/6 h-px bg-gray-800 mt-16" />
        <div className="flex flex-wrap items-center px-8 space-x-2 md:space-x-6 mt-8 mb-12 justify-center">
          <p className="text-xs text-gray-500">© 2021 GitHub, Inc.</p>
          <Link href="#">
            <a className="text-xs text-blue-400 hover:underline">Terms</a>
          </Link>
          <Link href="#">
            <a className="text-xs text-blue-400 hover:underline">Privacy</a>
          </Link>
          <Link href="#">
            <a className="text-xs text-blue-400 hover:underline">Security</a>
          </Link>
          <Link href="#">
            <a className="text-xs text-blue-400 hover:underline">Status</a>
          </Link>
          <Link href="#">
            <a className="text-xs text-blue-400 hover:underline">Docs</a>
          </Link>
          <div className="hidden md:block">
            <Icon
              className="w-8 h-8 fill-current text-gray-700 hover:text-gray-500 transition ease-in-out duration-200"
              name="githubFooter"
            />
          </div>
          <Link href="#">
            <a className="text-xs text-blue-400 hover:underline">
              Contact GitHub
            </a>
          </Link>
          <Link href="#">
            <a className="text-xs text-blue-400 hover:underline">Pricing</a>
          </Link>
          <Link href="#">
            <a className="text-xs text-blue-400 hover:underline">API</a>
          </Link>
          <Link href="#">
            <a className="text-xs text-blue-400 hover:underline">Training</a>
          </Link>
          <Link href="#">
            <a className="text-xs text-blue-400 hover:underline">Blog</a>
          </Link>
          <Link href="#">
            <a className="text-xs text-blue-400 hover:underline">About</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Container;
