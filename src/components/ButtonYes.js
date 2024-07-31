import { useNavigate } from 'react-router-dom';

function ButtonYes() {
    const navigate = useNavigate();
    function handleOnclick() {
        navigate('/yes');
    }
    return (
         <button 
          className="buttonYes"
          id="yes" 
          onClick={handleOnclick}>
          Yes
        </button>
        
    );
};

export default ButtonYes;