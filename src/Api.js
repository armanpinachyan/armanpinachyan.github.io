import { API_URL } from "./config";


const getAllCategories = async ()=>{
    const response = await fetch(API_URL + 'categories.php')
    return response.json()
}

const getFilteredCategory = async (category)=>{
    const response = await fetch (API_URL + 'filter.php?c=' + category)
    return response.json()
}

const getMealById = async (id) =>{
    const response = await fetch(API_URL + 'lookup.php?i=' + id)
    return response.json()
}


export {getAllCategories,getFilteredCategory,getMealById}