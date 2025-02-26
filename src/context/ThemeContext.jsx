import { createContext, useReducer } from "react";
import { ThemeReducer } from "./ThemeReducer";

const  ThemeContext = createContext()

 export const ThemeProvider =({children})=>{

const themeExite =JSON.parse(localStorage.getItem("theme"))

    const intialState ={
        theme : themeExite || false
    }

    const [state , dispatch] = useReducer(ThemeReducer, intialState)


    return(
        <ThemeContext.Provider value={{...state , dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}




export default ThemeContext