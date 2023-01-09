import { Link } from 'react-router-dom'
import { ButtonLike } from '../../atoms/ButtoLike/ButtonLike'
import'./ContainerItenProduct.scss'

const ContainerItenProduct = ( {name, image, category, price, id }) => {
    return(
        <div className='ContainerItenProduct'>
            <div className='ImgItenProduct'>
                <ButtonLike />
                <img alt="{name}" src={image} />
            </div>
            <h4 className='TitleItenProduct'>{name}</h4>
            <p className='CatItenProduct'>Categoria: {category}</p>
            <p className='PreciItenProduct'>${price}</p>
            <Link className='ButtonItenProduct' to={`/products/${id}`}>Ver Más</Link>
        </div>
    )
}

export default ContainerItenProduct