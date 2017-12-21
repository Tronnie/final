import React from "react";
import "./stars.css";

const Stars = () => (

  <section>

   
      <ul className="rate-area">
          <hr />
      <input type="radio" id="1-star" name="rating" disabled value="1" /><label for="1-star" >1</label>
      <input type="radio" id="2-star" name="rating" disabled value="2" /><label for="2-star" >2</label>
      <input type="radio" id="3-star" name="rating" disabled value="3" /><label for="3-star" >3</label>
      <input type="radio" id="4-star" name="rating" disabled value="4" /><label for="4-star" >4</label>
      <input type="radio" id="5-star" name="rating" disabled value="5" /><label for="5-star" >5</label>
      
     </ul>
    
  </section>
);

export default Stars;
