import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarContext } from '../../../context/CarContext';
import './CarPage.scss'


const CarPage = () => {
    const {mycar} = useContext( CarContext )
    return ( 
        <div className="CarPage">
            <section className="TitleCarpage">
                <h1>Carrito de compras</h1>
            </section>
            <section className='ListProduct'>
                    {
                        mycar.map(itemCar => (
                            <article key={itemCar.id} className='CardProduct'>
                                <img className='ImgCar' src={itemCar.image} alt={itemCar.name} />
                                <Link className='NameCar' to={`/products/${itemCar.id}`}><h6>{itemCar.name}</h6></Link>
                                <p className='DateCar'>Cant: {itemCar.counter}</p>
                                <p className='DateCar2'>C/U: ${itemCar.price}</p>
                                <div className='Total'>
                                    <div className='OrdTotal'>
                                        <p className='TitleT'>Total: </p>
                                        <h5>${itemCar.counter * itemCar.price}</h5>
                                    </div>
                                    <p className='Discunt'> 30% decuento $5000</p>
                                </div>
                            </article>
                        ))
                    }
                    <article> Total</article>
            </section>
        </div>
    );
}
export default CarPage;