import styles from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://curtissittenfeld.com/wp-content/uploads/romantic-comedy-cover.webp";
   let book2 = "https://upload.wikimedia.org/wikipedia/en/4/48/Tressoftheemeraldseacover.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51iOn6K-LfL.jpg";

   return (
<div>
   <div className={styles.bookHeading}>
<h3>{pageTitle}</h3>
<img src={book1} alt="Romantic Comedy by Curtis Sittenfield" />
<img src={book2} alt="Tress of the Emerald Sea by Brandon Sanderson" />
<img src={book3} alt="The London Seance Society by Sarah Penner" />
</div>
</div>    
   );
}