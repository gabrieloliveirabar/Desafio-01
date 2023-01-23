import { useContext } from "react"
import { AnticipationContext } from "../../context/anticipationContext"

interface ResultProps{
    value: Number
}
export function Result({ value }: ResultProps) {
    const { objectAnticipation } = useContext(AnticipationContext)

    const array = Object.values(objectAnticipation)
   
    

    return (
        <div className="bg-slate-300 w-full h-full rounded-md flex flex-col justify-start items-center text-blue-900  p-4  ">
            <h1 className="border-2 border-transparent border-b-indigo-500  text-4xl ">VOCÊ RECEBERÁ:</h1>
            <div className="">             
                {
                    array.map((elem, i, array) => {
                        
                        if (i == 0) {
                            return (
                                <h2 key={i} className="text-blue-400 text-2xl">Amanhã: R${elem} </h2>
                            )
                        } else if (i == 1) {
                            return (
                                <h2 className="text-blue-400 text-2xl">Em 15 dias: R$ {elem}</h2>
                            )
                        }
                        else if (i == 2) {
                            return (
                                <h2 className="text-blue-400 text-2xl">Em 30 dias: R$ {elem}</h2>
                            )
                        }
                        else if (i == 3) {
                            return (
                                <h2 className="text-blue-400 text-2xl">Em 90 dias: R$ {elem}</h2>
                            )
                        }

                        
                       
                           
                        } 
                    
                                          
                    )
                        
                }
                        
            </div>
        </div>
    )
}