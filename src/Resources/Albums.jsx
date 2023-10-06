import { useEffect } from "react";
import { useState } from "react";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const getAlbums = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const data = await res.json();
      setAlbums(data);
    };
    getAlbums();
  }, []);
  return (
    <div>
      <div>
        <ul>
          {albums.map((album) => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Albums;
