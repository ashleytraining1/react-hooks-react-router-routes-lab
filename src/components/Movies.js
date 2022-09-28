import React from "react";
import { movies } from "../data";

function Movies() {
  return (<div> 
    <h1>Movies Page</h1>

    {movies.map((movie)=>(
    <div key={movie.title}>
      {movie.title}
      {movie.time}
      </div>
    )
    )}
</div>
)}

export default Movies;
