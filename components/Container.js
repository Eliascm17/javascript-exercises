import Link from "next/link";
import AddDropDown from "../components/AddDropDown";
import Icon from "../components/Icon";
import ProfileDropdown from "../components/ProfileDropdown";

const Container = ({ children }) => {
  return (
    <div className="bg-black-bg h-screen">
      <nav className="mx-auto px-7 flex items-center justify-between py-3 bg-black-nav">
        <div className="flex items-center justify-between space-x-4">
          <Icon
            name="github"
            className="w-7 h-7 fill-current text-gray-200 hover:text-gray-400 transition ease-in-out duration-300"
          />
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
          <Icon
            name="notification"
            className="w-5 h-5 stroke-current text-white"
          />
          <AddDropDown />
          <ProfileDropdown />
        </div>
      </nav>
      <main className="flex flex-col flex-start items-center justify-center px-8">
        {children}
      </main>
      <div className="flex flex-col flex-start items-center justify-center">
        <div className="max-w-4xl w-full h-px bg-gray-800 mt-16"></div>
        <div className="flex items-center px-8 space-x-6 mt-8">
          <div className="text-xs text-gray-500">© 2021 GitHub, Inc.</div>
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
          <div>
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
