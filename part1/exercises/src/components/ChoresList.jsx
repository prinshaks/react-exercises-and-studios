import React from 'react';
import styles from './ChoresList.module.css';

export default function ChoresList () {
   const chores = ["Empty dishwasher", "Complete prep work","Buy groceries"];
   return (
      <>
      <div>
         <h3 className={styles.choresHeading}>Today's chores:</h3>
         <ul>
            <li className={styles.choresText}>{chores[0]}</li>
            <li className={styles.choresText}>{chores[1]}</li>
            <li className={styles.choresText}>{chores[2]}</li>
         </ul>
      </div>
      </>
      );
}