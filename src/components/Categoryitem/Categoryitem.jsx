import React from 'react'
import { Link, } from 'react-router-dom'

const Categoryitem = ({idCategory,strCategory,strCategoryDescription,strCategoryThumb}) => {

  
  return (
    <div className='Categoryitem' >
      
      <img src={strCategoryThumb}/>
      <h2 className='categorytext' >{strCategory}</h2>
      <p>{strCategoryDescription}</p>
      <Link className='btncategory' to={'/category/' + strCategory}>OPEN CATEGORY</Link>
    </div>
  )
}

export default Categoryitem