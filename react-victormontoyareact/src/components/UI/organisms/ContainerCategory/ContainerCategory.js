import './ContainerCategory.scss'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../firebase/config'
import ContainerItemCategory from '../../molecules/ContainerItemCategory/ContainerItemCategory'

const ContainerCategory = () => {
    const [category, setCategory] = useState ([])
    useEffect(()=>{
        //Ref Colection
        const categoryRef = collection(db, "data_category")
        //Peticion
        getDocs(categoryRef)
            .then((res) => {
                setCategory(res.docs.map((doc)=> {
                    return {
                        ...doc.data(),
                        id:doc.id
                    }
                }).slice(0, 4))
            })
    },[])
    return (
        <div className='ContainerCategory'>
            <section>
                <h2>Categorias de productos</h2>
            </section>
            <section  className='ContainerItemCate'>
                {
                    category.map ((categ) => <ContainerItemCategory key={categ.id} {...categ}/>)
                }
            </section>
        </div>
    );
}
export default ContainerCategory;