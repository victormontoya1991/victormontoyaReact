import './ContainerCategory.scss'
import { Link } from 'react-router-dom'
import logoBrand from '../../../../assets/img/logo_web.png';

const ContainerCategory = () => {
    const title ="/category/Chaquetas";
    return (
        <div className='ContainerCategory'>
            <section>
                <h2>Categorias de productos</h2>
            </section>
            <section  className='ContainerItemCate'>
                <Link to="/category/Cascos">
                    <h3>Cascos</h3>
                    <img alt='Category' src={ logoBrand }/>
                </Link>
                <Link to="/category/Guantes">
                    <h3>Guantes</h3>
                    <img alt='Category' src={ logoBrand }/>
                </Link>
                <Link to={title}>
                    <h3>Chaquetas</h3>
                    <img alt='Category' src={ logoBrand }/>
                </Link>
                <Link to="/category/Pantalones">
                    <h3>Pantalones</h3>
                    <img alt='Category' src={ logoBrand }/>
                </Link>
            </section>
        </div>
    );
}
export default ContainerCategory;