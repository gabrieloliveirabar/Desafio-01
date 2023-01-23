import {  createContext, useState, ReactNode } from "react";

interface IAnticipationProvider{
    children: ReactNode
}



export interface IAnticipationContext {
    objectAnticipation: Array<number>;
    setObjectAnticipation: React.Dispatch<React.SetStateAction<Array<number>>>
    
    
  }




export const AnticipationContext = createContext<IAnticipationContext>({} as IAnticipationContext)

export const AnticipationProvider = ({ children }: IAnticipationProvider) => {
    
    const [objectAnticipation,setObjectAnticipation] = useState<Array<number>>([])


    return (
        < AnticipationContext.Provider value={{ objectAnticipation, setObjectAnticipation }} >
            {children}
        </AnticipationContext.Provider>
    )
}