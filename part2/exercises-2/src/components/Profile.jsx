import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

const listItem = oceans.map(ocean =>

   <div className={`${ocean.fishCheck ==="true" ? "isAFish": "profile"}`} key={ocean.id}>
      <h1>{ocean.name}</h1>
      <img src={ocean.image} alt={ocean.name} className="img"/> 
      <h3>Fun Facts:</h3>
   <ul>
      <li>{ocean.fact1}</li>
      <li>{ocean.fact2}</li>
      <li>{ocean.fact3}</li>
   </ul>   
   <Button /> 
   </div>
); 

function Profile()
{
   
   return(

         <ul>
            {listItem}
         </ul>       
         
 
   );
}

export default Profile;