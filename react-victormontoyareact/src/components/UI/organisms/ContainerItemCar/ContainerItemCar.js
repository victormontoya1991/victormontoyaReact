import { Link } from "react-router-dom";

const ContainerItemCar = ({id, name, image, price, counter}) => {
    return (
        <div>
            <article key={id} className='CardProduct'>
                <img className='ImgCar' src={image} alt={name} />
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