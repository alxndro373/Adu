import { useState } from "react"
import {createTerminalesRequest, getTerminalesRequest, deleteTerminalesRequest, updateTerminalesRequest} from '../api/terminales.api'

export const useTerminales = () => {
    const [terminales, setTerminales] = useState([])

    const fetchTerminales = async () => {
        const res = await getTerminalesRequest()
        setTerminales(res.data)
    }
    const handleCreateTerminales = async (values) => {
        await createTerminalesRequest(values)
        fetchTerminales()
    }
    const handleDeleteTerminales = async (id) => {
        await deleteTerminalesRequest(id)
        fetchTerminales()
    }
    const handleUpdateTerminales = async (id,fields) => {
        const result = await updateTerminalesRequest(id,fields)
        console.log(result)
        if(result.status == 200 && result.data.affectedRows > 0) alert("Actualizado Correctamente")
        else alert("Actualizacion Fallida")
    }

    return {
        terminales,
        fetchTerminales,
        handleCreateTerminales,
        handleDeleteTerminales,
        handleUpdateTerminales,
    }
}