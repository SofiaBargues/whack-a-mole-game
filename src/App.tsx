import { useEffect, useState } from "react";
import "./App.css";
// import { Moles } from "./components/Moles";

const allHoles = [
  "hole1",
  "hole2",
  "hole3",
  "hole4",
  "hole5",
  "hole6",
  "hole7",
  "hole8",
  "hole9",
];
const getRandomElement = (elements: string[]) => {
  const index = Math.floor(Math.random() * elements.length);
  return elements[index];
};

const Moles = () => {
  const [mole, setMole] = useState(" ");
  const [total, setTotal] = useState(0);
  const [clckedMole, setClckedMole] = useState("");

  useEffect(() => {
    const filterHoles = allHoles.filter((word) => word != mole);
    const myTimeOut = setTimeout(() => {
      setMole(getRandomElement(filterHoles));
      setClckedMole("");
    }, 2000);
    return () => clearTimeout(myTimeOut);
  }, [mole]);
  return (
    <div
      className="flex flex-col items-center  bg-[#bef05d]
     h-screen"
    >
      <div className="text-3xl  m-6 ">Total {total}</div>
      <div className="grid grid-cols-3 max-w-[750px] m-auto items-center ">
        {allHoles.map((x) => (
          <div>
            <button
              onClick={() => {
                if (mole != clckedMole) {
                  setTotal(total + 1);
                  setClckedMole(mole);
                }
              }}
              disabled={mole != x}
            >
              {mole === x ? (
                <img className="" src="/mole.png" alt="" />
              ) : (
                <img src="/hole.png" alt="" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Moles />
    </div>
  );
}

export default App;
