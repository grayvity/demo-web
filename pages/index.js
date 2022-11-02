import { useState, useEffect } from "react";

export default function Home() {
  const left = 10;
  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full h-96 bg-orange-200 rounded border-8 border-white relative">
        <div
          className={`absolute w-24 h-24 rounded-full bg-white border-4 border-red-400 left-${left} top-10`}
        ></div>
      </div>
      <button>Up</button>
      <button>Down</button>
      <button>Right</button>
      <button>Left</button>
    </div>
  );
}
