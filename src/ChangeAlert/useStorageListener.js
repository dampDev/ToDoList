import React from "react";

function useStorageListener(sincronize) {
    
    const [storageChange, setStorageChange]= React.useState(false);

    window.addEventListener('storage', (change)=> {
        if (change.key === 'TODOS_V1'){
            console.log('hubo combios');
            setStorageChange(true);
        }
    });

    const toogleShow =()=>{
        sincronize();
        setStorageChange(false);
    }

        return {
            
                show: storageChange,
                toogleShow,
        };
    }


export  {useStorageListener};