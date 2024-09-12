import { useEffect, useState } from "react";

//create moles
let moles = ["mole1", "mole2", "mole3", "mole4", "mole5", "mole6"];
//create random moles
function getRandomMole() {
  return Math.floor(Math.random() * 5);
}
const randomMoleIndex = getRandomMole();
//apear random moles
const moleRandom = moles[randomMoleIndex];

//apear in short duration
export const Moles = () => {
  const [moles, setMoles] = useState([]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setMoles(moleRandom);
    }, 100);
    return () => clearTimeout(timeOut);
  }, [mole]);
  return <div>{moles}</div>;
};
//desapear the moles
