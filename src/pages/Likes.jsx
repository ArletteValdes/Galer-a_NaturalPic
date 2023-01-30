import { useLikesContext } from "../Context/LikesContext";

const Likes = () => {
  const { fav } = useLikesContext();

  return (
    <>
         
      <ul>
      {fav.map((photos) => {
        return (
            <li className="card" key={photos.photographer.id}>
                <h1 className="autor">{photos.photographer.photographer}</h1>
                <img className="foto" src={photos.photographer.src.original}></img>
            </li>
        );
      })}
      </ul>
    </>
  );
};

export default Likes;
