// import React from 'react'
import React, { useState, useEffect } from 'react';


const Hero = () => {
    const [slider, setSlider] = useState([]);
    //assigning source of data
    const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=1c760dbc20b63fec33b1488df823256c&language=en-US&page=1`

  useEffect(() => {
    // fetching data
      fetch(API_URL)
      // getting response
      .then((response) => response.json())
      .then((data) => setSlider(data.results));
  }, []);
  return (
    <div >
      <div key={slider.id}>{console.log(slider.overview)}</div>
      {/* {
        slider.map((movie) => {
          <div key={movie.id}>
            <h1>hello</h1>
          </div>
        })
      } */}
    </div>
  );
}

export default Hero