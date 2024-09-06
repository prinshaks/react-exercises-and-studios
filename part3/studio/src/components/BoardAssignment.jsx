import { useState } from 'react';

export default function BoardAssignment () {

   const [boardName,setName] = useState("");
   const boards = [
      {
         label:"Starters",
         value:"Starters"
      },
      {
         label:"Main dish",
         value:"Main"
      },
      {
         label:"Deserts",
         value:"Deserts"
      },
   ];

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board,index) => {
            return <option key={index} value={board.value}>{board.label}</option>
         }

         )};
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
