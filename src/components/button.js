

import {useState} from "react";
function MyButton({count,onClick}) {

 /*const [color,setColor]=useState("red")
  onst[count,setCount]= useState(0)

   unction sep_setstateFunction(){
    setColor("green")
   }
 
   function handleClick() {
    setCount(count + 1);
  }
*/

    return (
     
      <>
      
      <button onClick={onClick}>
      Clicked {count} times
    </button>
   
      </>
      
      
      
      
      
     
      );
  }



  export default MyButton;