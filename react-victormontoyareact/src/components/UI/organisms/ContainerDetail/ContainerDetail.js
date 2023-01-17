
import { useState } from 'react'
import { ButtonReturn } from '../../atoms/ButtonReturn/ButtonReturn'
import { ButtonQuantity } from '../../atoms/ButtonQuantity/ButtonQuantity'
import './ContainerDetail.scss'
import { Link } from 'react-router-dom'
import { ButtonLike } from '../../atoms/ButtoLike/ButtonLike'

const ContainerDetail = ({id, name, image, description, price, category, stock}) => {
    const [counter, setCounter] = useState (1)


    // const handleCar = () => {
    //     console.log({
    //         id,
    //         name,
    //         stock,
    //         category,
    //         image,
    //         description,
    //         price,
    //         counter
    //     })
    // }

    return(
        <div className="ContainerProduct" id={id}>
            <section className='HeaderProduct'>
                <article className='MigasProduct'>
                    <Link to={`/`}>Productos</Link> / <Link to={`/category/${category}`}>{category}</Link>
                </article>
                <ButtonReturn />
            </section>
            <section className='PintureProduct'>
                <article className='PintureImg'>
                    <ButtonLike />
                    <img alt="{name}" src={image}/>
                </article>
            </section>
            <section className='ContectsProduct'>
                    <h2 className='TitleProduct'>{name}</h2>
                    <article className='DescriptionProduct'>
                        <h6 className='TitleDProduct'>Descripción:</h6>
                        <p className='Description'>{description}</p>
                    </article>
                    <article className='ItemStock'>
                        <article className='Stock'>
                            <p className='NumbStock'>{stock}</p>
                            <h6 className='TitleStock'>Disponibles</h6>
                        </article>
                        <ButtonQuantity 
                            max = {stock} 
                            setCounter = {setCounter}
                            counter = {counter}
                        />
                    </article>
                    <article className='PreciProduct'>
                        <p>${price}</p>
                    </article>
                    <button className='ButtonCar' >Agregar Carrito</button>
            </section>
        </div>
    )
}

export default ContainerDetail