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
            <button className='ButtonItenProduct'>Ver Más</button>
        </div>
    )
}

export default ContainerItenProduct