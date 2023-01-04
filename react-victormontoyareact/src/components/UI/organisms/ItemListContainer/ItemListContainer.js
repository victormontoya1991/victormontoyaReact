import { dataRequest } from '../../../../helpers/dataRequest'
import { useEffect, useState } from 'react'
import ContainerListProducts from '../../molecules/ContainerItenProduct/ContainerListProducts'

const ItemListContainer = () => {
    const [products, setProducts] = useState ([])

    useEffect(()=>{
        dataRequest()
            .then((res)=>{
                setProducts(res)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return (
        <div>
            <ContainerListProducts products={products}/>
        </div>
    )
} 

export default ItemListContainer