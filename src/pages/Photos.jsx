import { useEffect } from "react";
import { useState } from "react";

import HeartButton from "../components/HeartButton";

const Photos = () => {
  const [Pics, setPics] = useState([]);

 

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
      <h1> Galería mejores fotografías</h1>
      <ul className="lista">
        {Pics.map((photos) => {
          return (
            <div className="container" key={photos.photographer}>
              <div className="card">
                <h1 className="autor">{photos.photographer}</h1>
                <img className="foto" src={photos.src.original}></img>
                <HeartButton />
{/* 
                <button onClick={() => addFav(item.photographer)}>Like</button> */}
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Photos;
