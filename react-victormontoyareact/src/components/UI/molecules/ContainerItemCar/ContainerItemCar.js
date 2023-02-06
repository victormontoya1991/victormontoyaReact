import './ContainerItemCar.scss';
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../../../../context/CarContext";
import { ButtonDelete } from "../../atoms/ButtoDelete/ButtonDelete";

const ContainerItemCar = ({id, name, image, price, counter, discount}) => {
    const{ deleteCar} = useContext (CarContext)
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
    const [priceDicount , setPriceDicount] = useState ()
    const [dicount, setDicount] = useState ()
    useEffect(() => {
        setPriceDicount(price-((price*discount)/100))
        setDicount(((price*discount)/100))
    },[price, discount])
    return (
        <div>
            <article key={id} className='CardProduct'>
                <section className='ImgCar'>
                    <ButtonDelete delet={deleteCar} id={id} />
                    <div className='ContainerImg'>
                        <img src={image} alt={name} />
                    </div>
                </section>
                <Link className='NameCar' to={`/products/${id}`}><h6>{name}</h6></Link>
                <p className='DateCar'>Cant: {counter}</p>
                <p className='DateCar2'>C/U:{formatterPeso.format(price)}</p>
                <section className='Total'>
                    <div className='OrdTotal'>
                        <p className='TitleT'>Total: </p>
                        {
                            discount
                                ?<h5>{formatterPeso.format(counter * priceDicount)}</h5>
                                :<h5>{formatterPeso.format(counter * price)}</h5>
                        }
                    </div>
                        {
                            discount
                                ?<p className='Discunt'>{discount}% OFF -{formatterPeso.format(dicount*counter)}</p>
                                :null
                        }
                </section>
            </article>
        </div>
    );
}

export default ContainerItemCar;