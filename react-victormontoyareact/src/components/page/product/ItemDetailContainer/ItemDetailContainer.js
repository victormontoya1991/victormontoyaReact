import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ContainerDetail from "../../../UI/organisms/ContainerDetail/ContainerDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../../../firebase/config"

const ItemDetailContainer =() => {
    const [product, setItemId]= useState (null)
    const { producId } = useParams ()

    useEffect(()=>{
        //Ref Product
        const docRef = doc(db, "data_produc", producId)
        //Peticion
        getDoc(docRef)
            .then(doc=>{
                setItemId({...doc.data(), id:doc.id})
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