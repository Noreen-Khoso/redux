import { useState } from "react";
import { Login } from "./Components/Login";
import Profile from "./Components/Profile";

import ContextProvider from "./Context/ContextProvider";



function App() {
  const[count,setcount] =useState(0)
  return (
    <ContextProvider>
    <div className=" bg-orange-400 flex flex-col  justify-center items-center h-full ">
      <h1>Hello This Is My Context API Component </h1>
      <Profile/>
      <Login/>
      
    </div>
    </ContextProvider>
  );
}

export default App;
