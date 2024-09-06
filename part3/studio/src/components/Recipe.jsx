import { useState } from 'react';
import '../App.css';

const RecipeAuthor = () => {
   let authorLink = "https://natashaskitchen.com/jalapeno-poppers-with-bacon/";
   let authorPhoto = "https://natashaskitchen.com/wp-content/uploads/2023/02/NK-Head-Red-Shirt-small.png";
   let authorName = "Natasha";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Jalapaeneos","Bacon","Cream Cheese","Garlic","Salt and Pepper"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Jalapeno Poppers with Bacon</h1>
            <p>Jalapeno Poppers are the ultimate appetizer. Whether they are for a party buffet or game time snacks, you will love these jalapenos, sliced in half and stuffed with a rich mixture of cream cheese and crispy bacon and baked to cheesy golden brown perfection.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://natashaskitchen.com/wp-content/uploads/2021/01/Jalapeno-Poppers-1.jpg" alt="Jalapeno poppers" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
