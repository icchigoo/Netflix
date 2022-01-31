import "./featured.scss"
import React from 'react';
import { InfoOutlined, PlayArrow } from "@material-ui/icons";



export default function Featured({type}) {
  return(
     <div className="featured">
    {type && (
      <div className="category">
        <span>{type== 'movie' ? "Movies" : "Seris"}</span>
        <select name="genre" id="genre">
          <option >Genre</option>
          <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
        </select>

      </div>
    )}
      <img src="https://wallpaperaccess.com/full/31580.jpg" alt="" />
 
  
  <div className="info">
    <img src="https://freepikpsd.com/file/2019/11/deadpool-2-logo-png-11-Images.png" alt="" />
   
    <span className="desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
    </span>
    <div className="buttons">
        
      <button className="play">

      <PlayArrow/>
         <span>Play</span>
      </button>
      <button className="more">
         <InfoOutlined/>
         <span>Info</span>

      </button>
    </div>

  </div>
  </div>
  );
}

