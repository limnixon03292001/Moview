import React, { useCallback, useEffect } from 'react'

const useClickOutside = (ref,setSearchData) => {

    const click = useCallback((event) => {
        if(ref.current && !ref.current.contains(event.target)){
             setSearchData('');
        }
     },[ref])

    useEffect(() =>{
        
       document.addEventListener('mousedown', click);

       return () => {
           document.removeEventListener('mousedown', click);
       }
   },[ref,setSearchData]);
}

export default useClickOutside