import React from "react";
import './CreateTodoButtom.css';
function CreateTodoButtom() {
    
    const onClickButton = (msg)=>{
        alert(msg)
    }

    return(
        <div className="TodoButtomMain">
        <button className="TodoButtom"
        onClick={()=> onClickButton('Aqui deberia mostrase el modal')}
        >
            +
        </button>    
        </div>
        
    );
    
}

export  {CreateTodoButtom};      