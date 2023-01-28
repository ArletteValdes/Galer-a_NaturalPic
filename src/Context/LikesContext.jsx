import { createContext, useContext } from "react";
import { useState } from "react";

export const LikesContext = createContext();

export default function LikesProvider({ children }) {
  const [fav, setFav] = useState([]);

  const addFav = (photographer) => {
    setFav([...fav, { photographer }]);
  };

  return (
    <LikesContext.Provider value={{ fav, addFav }}>
      {children}
    </LikesContext.Provider>
  );
}

//hook para utilizar

export const useLikesContext = () => useContext(LikesContext);
