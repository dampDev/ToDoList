import React from "react";
import {useStorageListener} from './useStorageListener';

function ChangeAlert({sincronize}) {
   const {show,toggleShow} = useStorageListener(sincronize);
   if (show) {
    return (
      <div>
         <p>Hubo cambio</p>
         <button
         onClick={toggleShow}
         >
            Recargar pagina
            </button>

      </div>
    );
    
   } else{
    return null;
   }
    
    
}


export  {ChangeAlert};