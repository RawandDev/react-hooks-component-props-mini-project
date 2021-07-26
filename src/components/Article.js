import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    // this works for the bonus challenge but it doesn't pass the tests when I run it.
//   const emoji = new Array(Math.ceil(minutes / 5) + 1).join("☕️");
  return (
    <article>
      <h3>{title}</h3>
      {/* <small>{`${date + " • " + emoji + minutes} mins read`}</small> */}
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
