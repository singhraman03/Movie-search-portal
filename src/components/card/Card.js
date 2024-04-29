import React, {useState, useEffect} from "react";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
import "./Card.css"
import {Link} from "react-router-dom"

const Card = ({movie}) => {
  [isLoading, setisLoading] = useState(true)

  useEffect(()=>{
    setTimeout(()=>{
      setisLoading(false)
    }, 1500)
  }, [])
  
  return<>
  {
    isLoading
    ?
    <div className="Card">
      <SkeletonTheme color="#202020" highlightColor="#444">
        <Skeleton height={300} duration={2}/>
      </SkeletonTheme>
    </div>
    :
    <Link to={`movie/${movie.id}`} style={{textDecoration: "none", color:"white"}}>
      <div className="Card">
        <img className="Card_img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path: ""}`}/>
        <div className="Card_overlay">
          <div className="Card_title">{movie?movie.original_title:""}</div>
          <div className="Card_runtime">
            {movie?movie.release_date:""}
            <span className="Card_rating"></span>
          </div>
        </div>
      </div>
    </Link>
  }
  </>
}