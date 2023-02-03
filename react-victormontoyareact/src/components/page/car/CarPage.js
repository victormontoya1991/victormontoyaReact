import { useContext } from 'react';
import { CarContext } from '../../../context/CarContext';
import ContainerItemCar from '../../UI/organisms/ContainerItemCar/ContainerItemCar';
import './CarPage.scss'

const CarPage = () => {
    const {mycar, totalCar, emptyCar } = useContext( CarContext )
    return ( 
        <div className="CarPage">
            {(mycar.length===0)
                ?<div> carro vacio</div>
                :<div>
                    <section className="TitleCarpage">
                        <h1>Tu carrito de compras</h1>
                    </section>
                    <section className='ListProduct'>
                            { mycar.map ((itemCar) => <ContainerItemCar key={itemCar.id} {...itemCar}/>)}
                            <article> Total ${totalCar()}</article>
                            <button  onClick={emptyCar} className='Alert'> Vaciar Car </button>
                    </section>
                </div>
            }
        </div>
    );
}
export default CarPage;