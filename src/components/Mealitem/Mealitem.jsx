import React from 'react'
import { Link } from 'react-router-dom'

const Mealitem = ({idMeal,strMeal,strMealThumb}) => {
  return (
    <div className='Mealitem'>
       <img className='imgmeal' src={strMealThumb} />
        <h2>{strMeal}</h2>
        <Link className='mealbtn' to={'/recipe/' + idMeal} >OPEN RECIPE</Link>
    </div>
  )
}

export default Mealitem