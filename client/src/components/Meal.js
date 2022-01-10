import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const Meal = ({ meal }) => {
  const imagesArray = [
    "https://www.englishclub.com/images/vocabulary/food/italian/italian-food-1024.jpg",
    "https://www.thavornpalmbeach.com/news/wp-content/uploads/2015/12/Tips-to-Kick-the-Junk-Food-Habit-.jpg",
    "https://post.healthline.com/wp-content/uploads/2020/08/raw-vegan-meal-thumb_0-1.jpg",
    "https://www.maangchi.com/wp-content/uploads/2020/12/la-galbi-scaled.jpg",
    "https://www.pachd.com/free-images/food-images/japanese-food-05.jpg",
  ];

  const randomImage = (imagesArray) => {
    return imagesArray[Math.floor(Math.random() * imagesArray.length) + 0];
  };

  return (
    <li className='meals-list-item'>
      <h2>{meal.title}</h2>
      <img src={randomImage(imagesArray)} alt='' />
      <p>{meal.description}</p>
      <h4>Location: {meal.location}</h4>
      <h4>Available seats: {meal.available_seats}</h4>
      <h2>Price: {meal.price},00 Kr.</h2>
      <p>Rating: {"⭐".repeat(Math.floor(Math.random() * 4) + 3)}</p>
      <footer>
        <Link to={`/meal/${meal.id}`}>
          <button
            className={meal.available_seats <= 0 ? "muted-button" : "button"}
            disabled={meal.available_seats <= 0}
          >
            {meal.available_seats > 1 ? "Reserve" : "Full"}
          </button>
        </Link>
        <button className='accent-button'>Reviews</button>
      </footer>
    </li>
  );
};

export default Meal;
