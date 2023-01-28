import { useLikesContext } from "../Context/LikesContext";

const Likes = () => {
  const { fav } = useLikesContext();

  return (
    <>
      <div> Lista de Likes</div>
      {fav.map((photos) => {
        return (
          <ul>
            <li key={photos.photographer}>Fotógrafo={photos.photographer}</li>
          </ul>
        );
      })}
    </>
  );
};

export default Likes;
