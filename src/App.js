import React, { useState } from 'react'
// import Auth from './Aut';
import globls from './child'

export default function App(){
  const [autst,setAut] = useState(false);
  const login = ()=>{
    autst?setAut(false):setAut(true);
  }
  console.log(console);
  console.timeStamp();
  return(
    <globls.Provider value={{status:autst,login:login}}>
      
      <h1>App js</h1>
      {/* <Auth/>  */}
    </globls.Provider>
  )
}