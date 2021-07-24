import React from "react"; 
import PropTypes from "prop-types"; 
import "./Movie.css";

// state가 필요없기 때문에 class componenet가 아니라 함수로 쓰면 된다. 
// alt, title : 사진위에 마우스 올렸을 때 정보 확인

function Movie({ year, title, summary, poster,genres }) {
    return (
      <div class="movie">
        <img src={poster} alt={title} title={title} /> 
        <div class="movie__data">
          <h3 class="movie__title">{title}</h3>
          <h5 class="movie__year">{year}</h5>
          <ul className="genres">
              {genres.map((genre, index) => (
                    <li key ={index} className="genres__genre">{
                        index} {genre}</li>
              ))}
          </ul>
          <p class="movie__summary">{summary.slice(0,140)}...</p>

        </div>
      </div>
    );
  }


// 우리가 가져올 props를 찾는다. 
// arrayOf() : 배열 복사 // genres가 배열이기 때문
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired, 
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Movie;