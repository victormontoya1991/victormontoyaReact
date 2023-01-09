
import { ButtonReturn } from '../../atoms/ButtonReturn/ButtonReturn'
import { ButtonQuantity } from '../../atoms/ButtonQuantity/ButtonQuantity'
import'./ContainerDetail.scss'
import { Link } from 'react-router-dom'
import { ButtonLike } from '../../atoms/ButtoLike/ButtonLike'

const ContainerDetail = ({id, name, image, description, price, category, stock}) => {
    return(
        <div className="ContainerProduct" id={id}>
            <section className='HeaderProduct'>
                <article>
                    <Link to={`/`}>Productos</Link> / <Link to={`/category/${category}`}>{category}</Link>
                </article>
                <article>
                    <ButtonReturn />
                </article>
            </section>
            <section className='PintureProduct'>
                <ButtonLike />
                <img alt="{name}" src={image}/>
            </section>
            <section className='ContectsProduct'>
                    <h2> {name}</h2>
                    <article>
                        <h6>Descripcion:</h6>
                        <p>{description}</p>
                    </article>
                    <article>
                        <h6>Cantidad disponible:</h6>
                        <p>{stock}</p>
                    </article>
                    <article>
                        <h6>Precio:</h6>
                        <p>${price}</p>
                    </article>
                    <ButtonQuantity />
                    <button className='ButtonCar'>Agregar Carrito</button>
            </section>
        </div>
    )
}

export default ContainerDetail