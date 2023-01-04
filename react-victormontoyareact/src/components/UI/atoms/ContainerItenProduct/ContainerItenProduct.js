import'./ContainerItenProduct.scss'

const ContainerItenProduct = ( {produc}) => {
    return(
        <div className='ContainerItenProduct'>
            <div className='ImgItenProduct'>
                <img alt="{produc.name}" src={produc.image} />
            </div>
            <h4 className='TitleItenProduct'>{produc.name}</h4>
            <p className='CatItenProduct'>Categoria: {produc.category}</p>
            <p className='PreciItenProduct'>${produc.price}</p>
            <button className='ButtonItenProduct'>Ver Más</button>
        </div>
    )
}

export default ContainerItenProduct