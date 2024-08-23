import React from 'react';
import styles from './Description.module.css';

let recipeTitle = "Natashaskitchen";
let recipeshortdesc = "These homemade Pierogi filled with cheesy potatoes, tossed with crisp bacon and melted butter, and served with sour cream is the ultimate comfort food. They can be served as the main dish or as an irresistible side.";


function RecipeAuthor(){
    let authorLink = "https://natashaskitchen.com/pierogi-recipe/";
    let authorPhoto = "https://natashaskitchen.com/wp-content/uploads/2023/02/NK-Head-Red-Shirt-small.png";
    let authorName = "Natasha";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text"  className={styles.imageUpdates}  /> 
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Pierogi Recipe</a> 
           </div>
           
         </div>


     );
};

class RecipeDescription extends React.Component {
    render() {
        return (
        <div> 
        <div>
            <h1>{recipeTitle}</h1>
            <p>{recipeshortdesc}</p>
        </div>
        <RecipeAuthor />
        </div>
        );
    }
}

export default RecipeDescription;