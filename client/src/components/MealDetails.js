import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Meal from "../components/Meal";
import Spinner from "../components/Spinner";
import MealDataService from "../services/Meal.service";

const MealDetails = () => {
  let params = useParams();
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    retrieveMealById();
  }, []);

  const retrieveMealById = () => {
    setLoading(true);
    MealDataService.get(6771)
      .then((response) => {
        setMeal(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return <h1>{meal.title}</h1>;
};

export default MealDetails;
