/* eslint-disable react-hooks/exhaustive-deps */
import './ItemListContainer'
import { useEffect, useState } from 'react'
import ContainerListProducts from '../../../UI/organisms/ContainerItenProduct/ContainerListProducts'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query , where } from 'firebase/firestore'
import { db } from '../../../../firebase/config'


const ItemListContainer = () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading ] = useState (true)
    const {categoryId} = useParams()
    useEffect(()=>{
        setLoading (true)
        //Ref Colection
        const productsRef = collection(db, "data_produc")
        const q = categoryId
                    ? query( productsRef, where("category","==",categoryId))
                    : productsRef
        //Peticion
        getDocs(q)
            .then((res) => {
                setProducts(res.docs.map((doc)=> {
                    return {
                        ...doc.data(),
                        id:doc.id
                    }
                }))
            })
            .finally(()=>{
                setLoading(false)
            })
    },[categoryId])

    return (
        <div>
            {
                loading
                    ?<h2>Cargando</h2>
                    :<ContainerListProducts products={products}/>
            }
        </div>
    )
} 

export default ItemListContainer