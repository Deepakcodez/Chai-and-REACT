import { useRef, useState } from "react";

export default function UseREfexamp() {
  const input = useRef("useref");
  const [screen, setScreen] = useState(input.current);
  const clickHandler = () => {
    setScreen(input.current.value);
    console.log(">>>>>>>>>>>", input.current.value);
  };
  return (
    <>
      <div className="container bg-slate-700 h-[100vh] w-[100%] flex items-center justify-center gap-3 flex-col">
        <h1 className="text-white text-4xl ">{screen}</h1>
        <div className="inputBOx bg-blue-500 inline-block py-8 rounded-md  p-6 ">
          <input type="text" ref={input} />
          <button
            className="bg-green-500 rounded-md hover:bg-green-600 text-white p-2 mx-2"
            onClick={clickHandler}
          >
            submit
          </button>
        </div>
      </div>
    </>
  );
}
