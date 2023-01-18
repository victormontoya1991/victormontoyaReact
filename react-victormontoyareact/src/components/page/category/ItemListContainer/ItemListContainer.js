/* eslint-disable react-hooks/exhaustive-deps */
import './ItemListContainer'
import { dataRequest } from '../../../../helpers/dataRequest'
import { useEffect, useState } from 'react'
import ContainerListProducts from '../../../UI/organisms/ContainerItenProduct/ContainerListProducts'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])
    const {categoryId} = useParams()
    useEffect(()=>{
        dataRequest()
            .then((res)=>{
                if ( categoryId ){
                    setProducts ( res.filter(produc => produc.category === categoryId))
                }else {
                    setProducts(res)
                }
            })
            .catch((err)=>{
                <h1> Err Data Conect </h1>
            })
    },[categoryId])

    return (
        <div>
            <ContainerListProducts products={products}/>
        </div>
    )
} 

export default ItemListContainer