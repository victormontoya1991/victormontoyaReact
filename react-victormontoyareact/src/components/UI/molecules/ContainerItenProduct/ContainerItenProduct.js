import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CarContext } from '../../../../context/CarContext'
import { ButtonLike } from '../../atoms/ButtoLike/ButtonLike'
import'./ContainerItenProduct.scss'

const ContainerItenProduct = ( {name, image, category, price, id, discount }) => {
    const{ formatterPeso} = useContext (CarContext)
    const [priceDicount , setPriceDicount] = useState ()
    useEffect(() => {
        setPriceDicount(price-((price*discount)/100))
    },[price, discount])
    return(
        <div className='ContainerItenProduct'>
            <section className='ContainerImg'>
                <ButtonLike />
                <Link className='ImgItenProduct' to={`/products/${id}`}>
                    <img className='ImgProuc' alt="{name}" src={image} />
                </Link>
            </section>        
            <h4 className='TitleItenProduct'>{name}</h4>
            <p className='CatItenProduct'>Categoria: {category}</p>
            {
                discount
                ?<section className='ContainerPreci'>
                    <p className='PreciIten'>{formatterPeso.format(price)}</p>
                    <p className='PreciItenProduct'>{formatterPeso.format(priceDicount)}</p>
                </section>
                :<p className='PreciItenProduct'>{formatterPeso.format(price)}</p>
            }
            <Link className='ButtonItenProduct' to={`/products/${id}`}>Ver Más</Link>
        </div>
    )
}

export default ContainerItenProduct