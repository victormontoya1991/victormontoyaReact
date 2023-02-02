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
                                <img src={itemCar.image} alt={itemCar.name} />
                                <Link to={`/products/${itemCar.id}`}><h6>{itemCar.name}</h6></Link>
                                <p className='DateCar'>Cant: {itemCar.counter}</p>
                                <p className='DateCar'>C/U: ${itemCar.price}</p>
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
            </section>
        </div>
    );
}
export default CarPage;