import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  const recipeAuthor  = <div>{recipedata[0].author}</div>

  const recipeAuthorImage = <img className="authorImage" src={recipedata[0].authorImage} />;
  const authorWebsite =<a href={recipedata[0].website}>{recipedata[0].website}</a> ;
   return (
    <div>
    {recipeAuthorImage}
    {recipeAuthor}
    {authorWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 