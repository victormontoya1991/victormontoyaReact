import ContainerItenProduct from '../../atoms/ContainerItenProduct/ContainerItenProduct'
import './ContainerListProducts.scss'

const ContainerListProducts = ({products}) => {
    return(
        <div className='ContainerListProducts'>
            { products.map ((produc) => <ContainerItenProduct key={produc.id} {...produc}/>)}
        </div>
    )
}
export default ContainerListProducts