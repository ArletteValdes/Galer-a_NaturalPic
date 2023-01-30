import { useEffect } from "react";
import { useState } from "react";
import LikesProvider from "../Context/LikesContext";
import UserProvider from "../Context/UserContext";
import HeartButton from "../components/HeartButton";
import { useLikesContext } from "../Context/LikesContext";

const Photos = () => {
  const [Pics, setPics] = useState([]);

  const { addFav} = useLikesContext();

  const getData = async () => {
    const res = await fetch("fotos.json");
    const data = await res.json();
    setPics(data.photos);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="galeria">
    
      <ul className="lista">
        {Pics.map((photos) => {
          return (
          
              <div className="card" key={photos.photographer}>
                <h1 className="autor">{photos.photographer}</h1>
                <img className="foto" src={photos.src.original}></img>
                <HeartButton photos={photos}/>

        
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Photos;
