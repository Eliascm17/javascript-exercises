import React, { useState } from "react";
import Icon from "./Icon";

function Avatar({ src, alt = "", size = "md" }) {
  const sizeClasses = {
    sm: "h-5 w-5",
    md: "h-8 w-8",
  }[size];

  return <img className={`${sizeClasses} rounded-full`} src={src} alt={alt} />;
}

const ProfileDropdown = ({ onClick }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-1">
      <span>
        <button className="flex" onClick={onClick}>
          <Avatar src="/me.jpg" size="sm" />
          <Icon
            name="downArrow"
            className="w-3 h-3 ml-0.5 mt-1.5 stroke-current text-white"
          />
        </button>
      </span>
      {open && (
        <div className="absolute w-60 max-w-xs rounded-md bg-white divide-y divide-gray-200 shadow-lg overflow-hidden mt-6">
          akjldsfalksjdhf
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
