import { useState, useEffect } from 'react'
import { getAllCategories } from '../../Api'
import Catgorylist from '../../components/Categorylist/'

const Homepage = () => {

  const [categories, setcategories]= useState([])

  useEffect(()=> {
    getAllCategories().then(data =>{
      console.log(data.categories);
      setcategories(data.categories)
    })
  },[])


  return (
    <div className='Homepage' >
     {
      <Catgorylist categories={categories} /> 
     }
    </div>
  )
}

export default Homepage