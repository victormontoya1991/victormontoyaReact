import './ContainerCategory.scss'
import { Link } from 'react-router-dom'

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
                    <img alt='Category' src="https://firebasestorage.googleapis.com/v0/b/victor-montoya-rj.appspot.com/o/banners%2FMesa%20de%20trabajo%201.png?alt=media&token=97fdfad3-6f45-4b80-8179-a360eadfb336"/>
                </Link>
                <Link to="/category/Guantes">
                    <h3>Guantes</h3>
                    <img alt='Category' src="https://firebasestorage.googleapis.com/v0/b/victor-montoya-rj.appspot.com/o/banners%2FMesa%20de%20trabajo%203.png?alt=media&token=8d035ef9-39f9-4152-a9d5-55ab45c5fb08"/>
                </Link>
                <Link to={title}>
                    <h3>Chaquetas</h3>
                    <img alt='Category' src="https://firebasestorage.googleapis.com/v0/b/victor-montoya-rj.appspot.com/o/banners%2FMesa%20de%20trabajo%202.png?alt=media&token=a2ff7338-9820-4205-9102-7a188b4046c5"/>
                </Link>
                <Link to="/category/Pantalones">
                    <h3>Pantalones</h3>
                    <img alt='Category' src="https://firebasestorage.googleapis.com/v0/b/victor-montoya-rj.appspot.com/o/banners%2FMesa%20de%20trabajo%204.png?alt=media&token=7f3f3f19-7b6a-42ca-9b5f-82c2c2ed92f4"/>
                </Link>
            </section>
        </div>
    );
}
export default ContainerCategory;