import {useParams,useNavigate} from 'react-router-dom'
import {getFilteredCategory} from '../../Api'
import { useState, useEffect } from 'react'
import Mealist from '../../components/Meallist/'

const Categorypage = () => {

  const {name} = useParams()
  const [meals, setmeals]= useState([])
  const navigate = useNavigate()

  useEffect(()=> {
    getFilteredCategory(name).then(data =>{
      console.log(data.meals);
      setmeals(data.meals)
    }) 
  }, [])

  return (
    <div className='Categorypage' >
      <i class="fa-solid fa-delete-left  btnrecipe" onClick={()=> navigate(-1)}  ></i>
      {
          <Mealist meals={meals} />
      }
    </div>
  )
}

export default Categorypage