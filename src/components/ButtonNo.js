import { generateCoordinates } from "../utils/generateCoordinates";

function ButtonNo() {
    function handleNoClick() {
       const button = document.getElementById("no");
       const buttonWidth = button.offsetWidth;
       const buttonHeight = button.offsetHeight;	
       const { x, y } = generateCoordinates(buttonWidth, buttonHeight);
       document.getElementById("no").style.left = `${x}px`;
       document.getElementById("no").style.top = `${y}px`;

    }
    return (
          <button 
            className="buttonNo" 
            id="no" 
            onClick={handleNoClick} 
            onMouseEnter={handleNoClick}
            >No
         </button>
    );
};

export default ButtonNo;
