import React, { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

const AddDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <span>
        <button
          className="flex focus:outline-none"
          onClick={() => setOpen(!open)}
          type="button"
        >
          <div className="flex stroke-current text-white hover:text-gray-500 transition ease-in-out duration-300">
            <Icon name="plus" className="w-4 h-4" />
            <Icon name="downArrow" className="w-3 h-3 mt-0.5" />
          </div>
        </button>
      </span>
      {open && (
        <div className="-mr-6 flex flex-col absolute mt-2 border border-gray-800 right-16 w-40 rounded-md bg-black-nav shadow-lg overflow-hidden">
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              New repository
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              Import repository
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              New gist
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              New organization
            </a>
          </Link>
          <Link href="#">
            <a className="inline-block text-sm px-4 py-1 leading-5 text-gray-100 bg-black-nav hover:bg-blue-600 transition ease-in-out duration-300">
              New project
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddDropDown;
