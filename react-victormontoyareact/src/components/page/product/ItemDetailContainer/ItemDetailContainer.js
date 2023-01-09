import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { dataRequestId } from "../../../../helpers/dataRequest"

export const ItemDetailContainer =({idProduct}) => {
    const [itemId, setItemId]= useState (null)
    const { dataId } = useParams ()

    console.log (dataId)

    useEffect(()=>{
        dataRequestId(idProduct)
            .then ((dataId) =>{
                setItemId(dataId)
            })
    }, [idProduct])

    return (
        <div>
            Hola
        </div>
    )
}