import React, { useState } from "react";
import Mycontext  from "./MyContext";



const ContextProvider = ({children}) => {
    const [user,setuser ] = useState(null);
    return(
        <Mycontext.Provider value={{user,setuser}}>
            {children}

        </Mycontext.Provider>
  )
}

export default ContextProvider