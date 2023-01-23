import { Form } from "./components/Form"
import { Result } from "./components/Result"
import "./styles/global.css"
import { useContext } from "react"
import { AnticipationContext } from "./context/anticipationContext"



function App() {

  return (
    <div className="w-screen h-screen  flex justify-center rounded-xl items-center ">
      <div className="bg-slate-200 h-3/4 w-3/4 rounded-xl flex  shadow-lg    tablet:flex-row  
       phone:flex-col phone:h-5/6 ">
        <Form/>      
        <Result value={20} />
        </div>
        
        
    </div>
  )
}

export default App
