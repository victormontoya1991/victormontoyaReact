import './ContainerDetail.scss'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ButtonReturn } from '../../atoms/ButtonReturn/ButtonReturn'
import { ButtonQuantity } from '../../atoms/ButtonQuantity/ButtonQuantity'
import { ButtonLike } from '../../atoms/ButtoLike/ButtonLike'
import { CarContext } from '../../../../context/CarContext'

const ContainerDetail = ({id, name, image, description, price, category, stock, discount}) => {
    // Info Produc
    const{ addCar, isInCar, formatterPeso} = useContext (CarContext)
    const {mycar} = useContext( CarContext );
    const [counter, setCounter] = useState (1)
    const handleCar = () => {
        const itemCar = {
            id,
            name,
            stock,
            category,
            image,
            description,
            price,
            counter,
            discount
        }
        addCar (itemCar)
    }
    // Max Counter
    const maxCounter = mycar.filter(item => item.id === id);
    const regre = function(cont){return cont.counter;}
    const regreCounter = maxCounter.map(regre)
    const stockAc = stock-regreCounter
    const [priceDicount, setPriceDicount]= useState ()
    useEffect(() => {
        setPriceDicount(price-((price*discount)/100))
    },[price, discount])
    return(
        <div className='ContainerProduct' id={id}>
            <section className='HeaderProduct'>
                <article className='MigasProduct'>
                    <Link to={`/`}>Productos</Link> / <Link to={`/category/${category}`}>{category}</Link>
                </article>
                <ButtonReturn />
            </section>
            <section className='PintureProduct'>
                <ButtonLike />
                <article className='PintureImg'>
                    <img alt="{name}" src={image}/>
                </article>
            </section>
            <section className='ContectsProduct'>
                    <h2 className='TitleProduct'>{name}</h2>
                    <article className='DescriptionProduct'>
                        <h6 className='TitleDProduct'>Descripción:</h6>
                        <p className='Description'>{description}</p>
                    </article>
                    <article className='PreciProduct'>
                        {
                            discount
                            ?<section className='ContainerPreci'>
                                <div className='PriceDicount'>
                                    <p className='TitleIten'>Precio Antes</p>
                                    <p className='PreciIten'>{formatterPeso.format(price)}</p>
                                </div>
                                <p className='PreciItenProduct'>{formatterPeso.format(priceDicount)}</p>
                            </section>
                            :<p className='PreciItenProduct'>{formatterPeso.format(price)}</p>
                        }
                    </article> 
                    <article className='ItemStock'>
                        {
                            stockAc<=0
                                ?<div className='Alert'> 
                                    <span className="material-icons md-70">info_outline</span>
                                    <p >Upss... Agotado</p>
                                </div>
                                : <ButtonQuantity 
                                    stockAc = {stockAc}
                                    max = {stock-regreCounter}
                                    setCounter = {setCounter}
                                    counter = {counter}
                                    onAdd={handleCar}
                                    />
                        }
                        {
                            !isInCar(id)
                                ?null
                                :<div className='CarButton'>
                                    <Link className='ButtonC' to="/car"> Ir Carrito </Link>
                                </div>

                        }
                    </article>
            </section>
        </div>
    )
}

export default ContainerDetail