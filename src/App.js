import React from "react";
import PropTypes from "prop-types";

function Food(props){
  return (
      <div>
        <h2>I love {props.name}</h2>
        <div>{props.rating}/5.0</div>
        <img src={props.image} alt={props.name} ></img>
      </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "",
    rating: 5
  },
  {
    id: 2,
    name: "Samgueopsal",
    image: "",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image: "",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image: "",
    rating: 4.7
  }
];

// property check
Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function renderFood(dish){
  return (
    <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
