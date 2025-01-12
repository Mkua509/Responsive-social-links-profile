import { CoolButton } from "./components/CoolButton";
import React, { useState } from "react";

function App() {

  return (
    <div className="bg-[#141414] w-dvw h-dvh flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-[#1F1F1F] rounded-lg">
        <img
          src="/ben gar.png"
          className="w-[90px] h-[90px] rounded-full mb-5 mt-7"
        />
        <h1 className="text-white text-2xl mb-2 font-bold">
          {" "}
          Maternus Kuang{" "}
        </h1>
        <h2 className="text-[#c5f82a] text-sm font-bold mb-6">
          {" "}
          Auckland, New Zealand{" "}
        </h2>
        <h3 className="text-[#808080] text-sm mr-12 ml-12 mb-5">
          {" "}
          "Heloooo my name is MAT AMMATM."{" "}
        </h3>

        <div className="flex flex-col gap-4 mb-5">
          <CoolButton text="Github" link="https://github.com" />
          <CoolButton text="Linkedin" link="https://www.linkedin.com/in/maternus-kuang-29b458297/" />
          <CoolButton text="Frontend Mentor" link="https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ" />
          <CoolButton text="X" link="https://x.com/?lang=en&mx=2" />
          <CoolButton text="Instagram" link="https://www.instagram.com/direct/t/7160180694109278/" />
        </div>
      </div>
    </div>
  );
}

export default App;
