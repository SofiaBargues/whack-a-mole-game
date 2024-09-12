import { useEffect, useState } from "react";

const allMoles = ["mole1", "mole2", "mole3", "mole4", "mole5", "mole6"];
const getRandomElement = (elements: string[]) => {
  const index = Math.floor(Math.random() * elements.length);
  return elements[index];
};

export const Moles = () => {
  const [mole, setMole] = useState(" ");
  //   const randomMoleIndex = getRandomMole(allMoles);

  useEffect(() => {
    const filterMoles = allMoles.filter((word) => word != mole);
    const myTimeOut = setTimeout(() => {
      setMole(getRandomElement(filterMoles));
    }, 2000);
    return () => clearTimeout(myTimeOut);
  }, [mole]);

  return (
    <div>
      <div>{mole}</div>
    </div>
  );
};

//create moles
//create random moles
//apear random moles
//apear in short duration
//desapear the moles
