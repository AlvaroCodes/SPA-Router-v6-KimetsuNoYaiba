import { useEffect, useState } from "react";
import '../../style.css';

export const Seasons_three = () => {

  
  const [infSeasons, setInfSeasons] = useState([])

  /* Se podria sacar esta logica fuera, ya que todos 
  los componentes la comparten y se repite codigo. 
  */ 

  useEffect( async () => {
    try {
      
      const resp = await fetch('https://api.jikan.moe/v4/anime/47778')
      const {data} = await resp.json();
   
      const {images, title, synopsis} = data; 
      const imgUrl = images.jpg.image_url;

      setInfSeasons([title, imgUrl, synopsis]);

      console.log(title);

    } catch (error) {
      console.log(error);
    }
  
  }, []);

  console.log(infSeasons);

  return (
    <div className="centrar">
        <h1>Seasons_three: {infSeasons[0]}</h1>
        <img src={infSeasons[1]} alt={infSeasons[0]} />
        <p> <span>Synopsis:</span> {infSeasons[2]}</p>
    </div>
  )
}
