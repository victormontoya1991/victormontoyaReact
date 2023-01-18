import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { dataRequestId } from "../../../../helpers/dataRequest"
import ContainerDetail from "../../../UI/organisms/ContainerDetail/ContainerDetail"


const ItemDetailContainer =() => {
    const [product, setItemId]= useState (null)
    const { producId } = useParams ()

    useEffect(()=>{
        dataRequestId( Number(producId))
            .then ((data) =>{
                setItemId(data)
            })
    }, [producId])

    return (
        <div>
            {
                product && <ContainerDetail {...product}/>
            }
        </div>
    )
}

export default ItemDetailContainer