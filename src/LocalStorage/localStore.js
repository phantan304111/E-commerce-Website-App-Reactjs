  //hai ham luu va get local storage
  
  export const setFormLocalstorage = (key,value)=> {
    return localStorage.setItem(key,JSON.stringify(value))
   }
  export const SaveFormLocalStorage = (key)=>{
     return JSON.parse(localStorage.getItem(key)) 
   }