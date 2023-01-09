import { Link } from 'react-router-dom'
import'./ContainerItenProduct.scss'

const ContainerItenProduct = ( {name, image, category, price, id }) => {
    return(
        <div className='ContainerItenProduct' id={id}>
            <div className='ImgItenProduct'>
                <div className='IconFavorite'>
                    <span className="material-icons md-70">favorite</span>
                </div>
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