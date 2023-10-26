import { useEffect, useState } from "react";

export default function Useeffect() {
  let [size, setSize] = useState(window.screen.width);
  let actualSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", actualSize);
    return () => {
      window.removeEventListener("resize", actualSize);
    };
  });

  return (
    <>
      <h1 className="text-4xl font-semibold mb-3">Your window size is</h1>
      <h1 className="text-3xl font-thin bg-amber-300 inline text-black p-2 ">
        {size}
      </h1>
    </>
  );
}
