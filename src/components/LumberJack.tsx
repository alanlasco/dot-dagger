import React,{useState} from 'react'
import "../styles/Lumber.css";
export const LumberJack = () => {
const [first, setfirst] = useState<boolean>(true);

const handlebtn = () => {
    setfirst(!first);
  };

  // Función para cerrar el menú (poniendo clicked a false)
  const closeMenu = () => {
    setfirst(false);
  };
  return (
    <>
    <div className='Lcontainer' id='lj'>
    <div className="paddlingContainer">
    <div className='pContainer'>
        <span className='pFrase'>Didn't press the button?</span>
        <p className='pFrase'>That's paddlin</p>
    </div>
    <img className='paddlin' src="paddlin.png" alt="Paddlin image" />
</div>
    <button onClick={handlebtn} className="btn">{`${first ? 'PRESS IT' : 'CLOSE'}`}</button>


    <iframe className={`${first ? 'h' : 'v'}`} src="https://tbot.xyz/lumber/" ></iframe>


    </div>
    
    </>
  )
}
