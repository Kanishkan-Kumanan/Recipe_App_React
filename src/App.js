import * as React from "react";

import {useState} from "react";

import {useEffect} from "react";

import Recipe from "./recipe";

import * as $ from "jquery";

import"../public/css/style.css";

import "../public/index.html";



const App = () =>{
  const APP_ID = "eeb6e2f7";
  const APP_KEY = "52875dff1d8a34198f363076fa52ddff";

  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const[query, setQuery] = useState();


  useEffect(() =>{
    getRecipes();
  },[query]);

  const getRecipes = async ()  =>{
   const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=eeb6e2f7&app_key=52875dff1d8a34198f363076fa52ddff`);
   const  data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  };

  const getSearch = e =>{
     e.preventDefault();
     setQuery(search);
     setSearch('');
  }

return(
  
<div className="search">
  <h1 className="title">Recipes~App</h1>
  <form className="search-form" onSubmit={getSearch}>
 
    <input type="text" className="search-bar" value ={search} onChange={updateSearch}></input>
      <button type="submit" className="search-button">Search</button>
      </form> 
      <div className="recipes">
  {recipes.map(recipe =>(
     <Recipe key ={recipe.recipe.image}
      title={recipe.recipe.label}
     image={recipe.recipe.image}
     calories={recipe.recipe.calories}
     ingredients={recipe.recipe.ingredients}/>
  ))}
</div>
  </div>
  
)

}

 
export default App;