import React, { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

const AddDropDown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <span>
        <button className="flex" onClick={() => setOpen(!open)} type="button">
          <div className="flex fill-current hover:text-blue-600 transition ease-in-out duration-300">
            <Icon
              name="plus"
              className="w-4 h-4 stroke-current text-white hover:text-blue-600 transition ease-in-out duration-300"
            />
            <Icon
              name="downArrow"
              className="w-3 h-3 mt-0.5 stroke-current text-white hover:text-blue-600 transition ease-in-out duration-300"
            />
          </div>
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

export default AddDropDown;
