import React, { useState } from "react";

export const CoolButton = ({ text, link }: { text: string; link: string }) => {
  const [isActive, setIsActive] = useState(false); // State for active/inactive styling

  return (
    <a
      href={link} // Use the link passed as a prop
      className={`w-72 bg-[#333333] rounded-lg p-2 text-center hover:bg-[#C4F82A] hover:text-black text-white ${
        isActive ? "active" : "inactive"
      }`}
      onClick={() => setIsActive(!isActive)} // Toggle active state
    >
      {text}
    </a>
  );
};