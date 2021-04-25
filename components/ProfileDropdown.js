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
        <button className="flex" onClick={() => setOpen(!open)}>
          <Avatar src="/me.jpg" size="sm" />
          <Icon
            name="downArrow"
            className="w-3 h-3 ml-0.5 mt-1.5 stroke-current text-white"
          />
        </button>
      </span>
      {open && (
        <div className="flex flex-col absolute mt-1 right-16 w-30 max-w-xs rounded-md bg-gray-600 shadow-lg overflow-hidden">
          <Link href="#">
            <a className="inline-block text-xs px-2 py-1 leading-5 text-gray-100 bg-gray-700 hover:bg-blue-600 transition ease-in-out duration-300">
              New repository
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-xs px-2 py-1 leading-5 text-gray-100 bg-gray-700 hover:bg-blue-600 transition ease-in-out duration-300">
              Import repository
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-xs px-2 py-1 leading-5 text-gray-100 bg-gray-700 hover:bg-blue-600 transition ease-in-out duration-300">
              New gist
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-xs px-2 py-1 leading-5 text-gray-100 bg-gray-700 hover:bg-blue-600 transition ease-in-out duration-300">
              New organization
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-xs px-2 py-1 leading-5 text-gray-100 bg-gray-700 hover:bg-blue-600 transition ease-in-out duration-300">
              New project
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
