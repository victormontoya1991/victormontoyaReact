/* eslint-disable react-hooks/exhaustive-deps */
import './SaleListContainer.scss'
import { useEffect, useState } from 'react'
import ContainerListProducts from '../../../UI/organisms/ContainerItenProduct/ContainerListProducts'
import { collection, getDocs, query , where } from 'firebase/firestore'
import { db } from '../../../../firebase/config'


const SaleListContainer = () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading ] = useState (true)
    const discount = 1
    useEffect(()=>{
        setLoading (true)
        //Ref Colection
        const productsRef = collection(db, "data_produc")
        const q = discount
                    ? query( productsRef, where("discount",">=",discount))
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
    },[discount])

    return (
        <div>
            {
                loading
                    ?<div className='Loanding'>Cargando</div>
                    :<ContainerListProducts products={products}/>
            }
        </div>
    )
} 

export default SaleListContainer