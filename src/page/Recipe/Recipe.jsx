
import {useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getMealById } from '../../Api'


const Recipe = () => {
 
    const {id} = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate()

    useEffect(()=> {
        getMealById(id).then(data=>{
            console.log(data.meals[0]);
            setRecipe(data.meals[0])
        })
    },[])

 
    return (
    <div className='Recipe' >
        <i class="fa-solid fa-delete-left  btnrecipe" onClick={()=> navigate(-1)}  ></i>
        <div className="rec">
        <img className='recepimg' src={recipe.strMealThumb} />
        <div className="recep">
        <h2 className='recipeh2' >{recipe.strArea}</h2>
        <h2>{recipe.strIngredient1}</h2>
        <h2>{recipe.strIngredient2}</h2>
        <h2>{recipe.strIngredient3}</h2>
        <h2>{recipe.strIngredient4}</h2>
        <h2>{recipe.strIngredient5}</h2>
        <h2>{recipe.strIngredient6}</h2>
        <h2>{recipe.strIngredient15}</h2>
        <h2>{recipe.strMeal}</h2>
        <h2>{recipe.strMeasure1}</h2>
        <h2>{recipe.strMeasure2}</h2>
        <h2>{recipe.strMeasure3}</h2>
        <h2>{recipe.strMeasure4}</h2>
        <h2>{recipe.strMeasure5}</h2>
        <h2>{recipe.strMeasure11}</h2>
        <h2>{recipe.strMeasure7}</h2>
        </div>
        </div>
    </div>
  )
}

export default Recipe