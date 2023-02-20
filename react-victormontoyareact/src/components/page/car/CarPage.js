import { useContext } from 'react';
import { CarContext } from '../../../context/CarContext';
import { EmptyCar } from '../../UI/molecules/EmptyCar/EmptyCar';
import ContainerItemCar from '../../UI/molecules/ContainerItemCar/ContainerItemCar';
import './CarPage.scss'
import { WindonTotal } from '../../UI/atoms/WindonTotal/WindonTotal';
import { Link } from 'react-router-dom';

const CarPage = () => {
    const {mycar, totalCar, discountCar, emptyCar, formatterPeso } = useContext( CarContext )
    return ( 
        <div className="CarPage">
            {(mycar.length===0)
                ? <EmptyCar />
                :<div>
                    <section className="TitleCarpage">
                        <h1>Tu carrito de compras</h1>
                    </section>
                    <section className='ListProduct'>
                            { mycar.map ((itemCar) => <ContainerItemCar key={itemCar.id} {...itemCar}/>)}
                            <WindonTotal 
                                totalCar={totalCar} 
                                emptyCar={emptyCar} 
                                discountCar={discountCar}
                                formatterPeso={formatterPeso}
                                />
                    </section>
                    <section>
                        <Link to="/checkaut">Finalizar Compra</Link>
                    </section>
                </div>
            }
        </div>
    );
}
export default CarPage;