import React, { useContext } from "react";
import globls from "./child";

const Auth = () => {
  const auth = useContext(globls);
  console.table(auth.status);
  return (
    <div>
      <h1>Are you authenticated?{auth.status} </h1>
      {auth.status ? <p>Yes you are</p> : <p>Nopes</p>}

      <button onClick={auth.login}>Click To Login</button>
    </div>
  );
};
export default Auth;
