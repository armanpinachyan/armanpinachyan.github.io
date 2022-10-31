import React from 'react'
import Mealitem from '../Mealitem'

const Meallist = ({meals}) => {
  return (
    <div className='Meallist' >
        {
            meals.map(meal => <Mealitem key={meal.idMeal} {...meal}  /> )
        }
    </div>
  )
}

export default Meallist