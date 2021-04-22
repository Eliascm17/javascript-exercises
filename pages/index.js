import Icon from "../components/Icon";
import AddDropDown from "../components/AddDropDown";
import Link from "next/link";
import ProfileDropdown from "../components/ProfileDropdown";

export default function Home() {
  return (
    <div className="bg-black-bg h-screen">
      <nav className="mx-auto px-7 flex items-center justify-between py-3 bg-black-nav">
        <div className="flex items-center justify-between space-x-4">
          <Icon name="github" className="w-7 h-7" />
          <Link href="#">
            <a className="inline-block text-xs font-semibold leading-5 text-white hover:text-gray-400 transition ease-in-out duration-300">
              Pull requests
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-xs font-semibold leading-5 text-white hover:text-gray-400 transition ease-in-out duration-300">
              Issues
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-xs font-semibold leading-5 text-white hover:text-gray-400 transition ease-in-out duration-300">
              Marketplace
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-xs font-semibold leading-5 text-white hover:text-gray-400 transition ease-in-out duration-300">
              Explore
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Icon name="notification" className="w-5 h-5 text-white" />
          <AddDropDown />
          <ProfileDropdown />
        </div>
      </nav>
      <main className="flex flex-col flex-start items-center justify-center px-8">
        <div className="flex flex-start max-w-4xl w-full pl-16 space-x-2 mt-16 items-center py-2">
          <Icon name="search" className="h-6 w-6" />
          <h1 className="text-white text-2xl font-sans-apple-system">
            Search more than <span className="font=semibold">69M</span> users
          </h1>
        </div>
        <div className="flex flex-start max-w-3xl w-full space-x-4 pt-2">
          <input
            className="max-w-2xl w-full focus:ring-2 text-white text-xs bg-black-bg border-2 border-gray-700 focus:border-blue-400 focus:ring-blue-800 rounded-md py-0.5 pl-2"
            placeholder="Search GitHub"
          />
          <button className="text-gray-200 text-sm bg-black-button px-4 rounded-md ">
            Search
          </button>
        </div>
        <div className="flex flex-start max-w-3xl w-full text-white text-xs font-sans-apple-system mt-4">
          ProTip! For an{" "}
          <a className="underline text-blue-500" href="#">
            advanced search
          </a>
          , use some of our{"  "}
          <a className="underline text-blue-500" href="#">
            {"  "} prefixes
          </a>
        </div>
      </main>
    </div>
  );
}
