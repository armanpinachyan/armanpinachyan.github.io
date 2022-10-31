import React from 'react'
import Categoryitem from '../Categoryitem'

const Categorylist = ({categories}) => {
  return (
    <div className='Categorylist' >
      
      {
        categories.map(category => <Categoryitem key={category.idCategory} {...category} />)
      }
    </div>
  )
}

export default Categorylist