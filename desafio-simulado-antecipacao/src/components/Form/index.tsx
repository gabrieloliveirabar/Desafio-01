import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as axios from "axios"
import api from '../../services/api';
import { useContext } from 'react';
import { AnticipationContext } from '../../context/anticipationContext';


export function Form() {
    const {setObjectAnticipation } = useContext(AnticipationContext)

    const formSchema = yup.object().shape({
        amount: yup.number().required("campo obrigatório obrigatório"),
        installments: yup.number().max(12, "minimo 12 parcelas.").required("campo obrigatório"),
        mdr: yup.number().required("campo obrigatório"),
       
      });

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formSchema)
    })
    const onSubmit = (data:object)=>{
        api.post("",data).then((res)=>setObjectAnticipation(res.data)).catch((err) => console.log(err))
    } 
    return (
        <div className="bg-slate-50 font-sans w-full max-w-5xl  h-full  rounded-md flex-col justify-items-center  p-4 laptop:p-3  ">
            <h1 className=" text-3xl mb-4  font-medium text-gray-600 md:text-xl  ">Simule sua Antecipação</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex-col h-3/5 justify-items-center">

                <label htmlFor={"amount"} >{"Informe o valor da venda"}*</label>
                <input  id={"amount"} placeholder={"R$"} className=' w-full  p-3   gap-3  bg-slate-100 rounded-lg focus:border-blue-900 border border-blue-500  hover:border-sky-900 phone:p-1 ' {...register("amount")} />

                <label htmlFor={"installments"} className="mb-8">{"Em quantas parcelas"}*</label>
                <input  id={"installments"} className=' w-full  p-3   gap-3  bg-slate-100 rounded-lg focus:border-blue-900 border border-blue-500  hover:border-sky-900 phone:p-1 ' {...register("installments")} />

                <label htmlFor={"mdr"} className="mb-8">{"Informe percentual de MDR"}*</label>
                <input type={"number"} id={"mdr"} className=' w-full  p-3   gap-3  bg-slate-100 rounded-lg focus:border-blue-900 border border-blue-500  hover:border-sky-900 phone:p-1' {...register("mdr")} />
                
                <button type="submit" className="text-blue-600 "> Verificar </button>
            </form>
        </div>
    )
}