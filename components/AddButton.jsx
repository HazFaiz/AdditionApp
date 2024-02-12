

import { useState } from "react";
const AddButton = ({firstNumbs, secondNumbs}) => {

  const [resultNumbs , setResultNumbs] = useState(0);

  function addNumbs() {

    //Check for valid digits
    
    if (isNaN(firstNumbs) || isNaN(secondNumbs) ) {
      alert(`please enter valid numbers`)
    } else {   
      //Set the result to the addition of the two inputs
      setResultNumbs(firstNumbs + secondNumbs)   
    } 
  }

  return (
    <>
    
      {/* invoke the addNumbs function on button click */}
      <button className="submitBtn" onClick={addNumbs}>Add Two numbers</button>

      {/* display the value of resultNumbs if available, otherwise '' */}
      <div className="numsResult" >Total: {resultNumbs|| ''} </div>
    
    </>
  )
}

export default AddButton;