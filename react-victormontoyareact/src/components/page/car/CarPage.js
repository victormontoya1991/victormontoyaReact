import { useContext } from 'react';
import { CarContext } from '../../../context/CarContext';
import './CarPage.scss'


const CarPage = () => {
    const {car} = useContext(CarContext)
    return ( 
        <div className="CarPage">
            <section className="TitleCar">
                <h1>Carrito de compras</h1>
            </section>
            <section>
                {
                    car.map(itemCar => (
                        <div key={itemCar.id}>
                            <img src={itemCar.image} alt={itemCar.name} />
                            <h6>{itemCar.name}</h6>
                            <p>Unid:{itemCar.counter}</p>
                            <p>Preci: ${itemCar.counter * itemCar.price}</p>
                        </div>
                    ))
                }
            </section>
        </div>
    );
}
export default CarPage;