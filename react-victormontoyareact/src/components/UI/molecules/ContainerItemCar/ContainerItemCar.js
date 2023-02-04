import './ContainerItemCar.scss';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarContext } from "../../../../context/CarContext";
import { ButtonDelete } from "../../atoms/ButtoDelete/ButtonDelete";

const ContainerItemCar = ({id, name, image, price, counter}) => {
    const{ deleteCar } = useContext (CarContext)
    return (
        <div>
            <article key={id} className='CardProduct'>
                <div className='ImgCar'>
                    <ButtonDelete delet={deleteCar} id={id} />
                    <img className='ImgCar' src={image} alt={name} />
                </div>
                <Link className='NameCar' to={`/products/${id}`}><h6>{name}</h6></Link>
                <p className='DateCar'>Cant: {counter}</p>
                <p className='DateCar2'>C/U: ${price}</p>
                <div className='Total'>
                    <div className='OrdTotal'>
                        <p className='TitleT'>Total: </p>
                        <h5>${counter * price}</h5>
                    </div>
                    <p className='Discunt'> 30% decuento -$5000</p>
                </div>
            </article>
        </div>
    );
}

export default ContainerItemCar;