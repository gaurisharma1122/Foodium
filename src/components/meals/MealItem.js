import React from 'react'
import "./Meals.css"
import { Link } from 'react-router-dom'

const MealItem = ({ strMeal, strMealThumb}) => {
  return (
    <article className='meal-item'>
      <img src={strMealThumb} alt={strMeal} />
      <button className="button">
                <Link to={`/`} >
                    {strMeal}
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </button>
    </article>
  )
}

export default MealItem
