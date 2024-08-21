

export default function HobbyLinks() {
    const hobbyLinks = ["https://www.goodreads.com/", "https://www.ravelry.com/"];
    return (
        <>
        <div>
           <h3>My Hobbies</h3>
              <a href="{hobbyLinks[0]}">Goodreads</a><br/>
              <a href="{hobbyLinks[1]}">Ravelry</a>
        </div>
        </>
        );
}