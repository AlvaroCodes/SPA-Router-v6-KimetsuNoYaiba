import { useEffect, useState } from "react"

import '../../style.css'

export const Seasons_one = () => {


  const [infoSeasons, setInfoSeasons] = useState([]);

  
  /* Se podria sacar esta logica fuera, ya que todos 
  los componentes la comparten y se repite codigo. 

  // api https://api.jikan.moe/v4/anime?q=Kimetsu%20no%20Yaiba
  
  */ 

  useEffect( async () => {
    
    try {
      
      const resp = await fetch ('https://api.jikan.moe/v4/anime/38000');
      const { data } = await resp.json();

      
      const {images, title, synopsis} = data; 
      const imgUrl = images.jpg.image_url;

      setInfoSeasons([title, imgUrl, synopsis]);

      console.log(title);


    } catch (error) {
      console.log(error);
    }
  
    
  }, [])
  

  return (
    <div className="centrar">
        <h1>Seasons_one: {infoSeasons[0]}</h1>
        <img src={infoSeasons[1]} alt={infoSeasons[0]} />
        <p> <span>Synopsis:</span> {infoSeasons[2]}</p>
    </div>
  )
}
