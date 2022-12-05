import React from "react";
function useLocalStorage(itemName, initialValue){
  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));

  const {
    sincronizedItem,
    error,
    loading,
    item
  } = state;
  
  // const [sincronizedItem, setSincronizedItem ]   = React.useState(true);
  // const [error, setError] = React.useState(false);
  //   const [loading, setLoading] = React.useState(true);
  //   const[item, setItem] = React.useState(initialValue);
   
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName,
          JSON.stringify(initialValue));
          parsedItem = initialValue;
          
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);

        } catch(error){

          setError(error);
        }
      },3000);
    },[sincronizedItem]);


  const saveItem = (newItem) => {
    try {
     const stringifiedItem = JSON.stringify(newItem);
     localStorage.setItem(itemName, stringifiedItem);
     setItem(newItem);
    } catch (error) {
     setError(error)
    }
   };

    const sincronizeItem =() =>{
      setLoading(true);
      setSincronizedItem(false);
    };


   return{
     item,
     saveItem,
     loading,
     error,
     sincronizeItem

   };
 
 }

 const initialState =({initialValue})=>({
  sincronizedItem:true,
    error:false,
    loading: true,
    item: initialValue,
 });

 const actionTypes = {
  error : 'ERORR',

 };

 const reducerOnject =(state, payload) => ({

 });

 const reducer = (state, action) => {
  reducerOnject(state, action.payload)[action.type] || state;
 }

 export {useLocalStorage};