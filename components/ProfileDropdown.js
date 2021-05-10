import React, { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

function Avatar({ src, alt = "", size = "md" }) {
  const sizeClasses = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
  }[size];

  return <img className={`${sizeClasses} rounded-full`} src={src} alt={alt} />;
}

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-1">
      <span>
        <button
          className="flex focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <Avatar src="/me.jpg" size="sm" />
          <Icon
            name="downArrow"
            className="w-3 h-3 ml-0.5 mt-1.5 stroke-current text-white hover:text-gray-500 transition ease-in-out duration-300"
          />
        </button>
      </span>
      {open && (
        <div className="absolute flex flex-col mt-2 -mr-6 border border-gray-800 right-6 max-w-xs rounded-md bg-black-nav shadow-lg overflow-hidden w-40">
          <div className="text-sm text-gray-200 inline-block px-4 py-1">
            Signed in as
          </div>
          <div className="text-sm text-gray-200 font-semibold inline-block px-4 py-1">
            Eliascm17
          </div>
          <div className="w-full h-0.5 bg-gray-800 my-2" />
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Your Profile
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Your repositories
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Your codespaces
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Your organizations
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Your project
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Your stars
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Your gists
            </a>
          </Link>
          <div className="w-full h-0.5 bg-gray-800 my-2" />
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Upgrade
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Feature preview
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Help
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Settings
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
