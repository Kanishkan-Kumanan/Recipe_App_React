import * as React from "react";

import style from "./recipe.module.css";






const Recipe = ({title, image, calories,ingredients}) =>{ 
   return(
    <div className={style.recipe}>
      <h1 className={style.title}> {title} </h1>
      <p><bold> Calories:</bold> {calories} </p>
      <ol>{ingredients.map(ingredient=>(
               <li>{ingredient.text}</li>
      ))}</ol>
      <img className={style.image} src ={image} alt=""/>

      </div>
  )
}


export default Recipe;