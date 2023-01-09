import ContainerItenProduct from '../../molecules/ContainerItenProduct/ContainerItenProduct'
import './ContainerListProducts.scss'

const ContainerListProducts = ({products}) => {
    return(
        <div className='PageListProducts'>
            { products.map ((produc) => <ContainerItenProduct key={produc.id} {...produc}/>)}
        </div>
    )
}
export default ContainerListProducts
