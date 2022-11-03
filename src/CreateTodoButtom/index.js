import React from "react";
import './CreateTodoButtom.css';
function CreateTodoButtom(props) {
    
    const onClickButton = ()=>{
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <div className="TodoButtomMain">
        <button className="TodoButtom"
        onClick={onClickButton}
        >
            +
        </button>    
        </div>
        
    );
    
}

export  {CreateTodoButtom};      