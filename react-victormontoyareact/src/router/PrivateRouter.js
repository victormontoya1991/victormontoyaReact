import ItemListContainer from '../components/page/category/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/page/product/ItemDetailContainer/ItemDetailContainer';
import PageContact from '../components/page/contact/contact';
import CarPage from '../components/page/car/CarPage';
import SaleListContainer from '../components/page/category/SaleListContainer/SaleListContainer';
import Home from '../components/page/home/Home';
import Checkaut from '../components/page/checkout/Checkaut'
import { NavBar} from '../components/UI/organisms/NavBar/NavBar';
import { Foooter } from '../components/UI/organisms/Footer/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';


const PrivateRouter = () => {
    return (
        <>
            <NavBar />
                <Routes>
                    <Route path="/" element={ <Home /> }/>
                    <Route path="/category/:categoryId" element={ <ItemListContainer /> }/>
                    <Route path="/sale" element={ <SaleListContainer /> }/>
                    <Route path="/products/:producId" element = {<ItemDetailContainer /> }/>
                    <Route path="/contact" element={ <PageContact /> }/>
                    <Route path="/car" element={<CarPage /> } />
                    <Route path="/checkaut" element={<Checkaut /> } />
                    <Route path='*' element={<Navigate to={"/"} /> }/>
                </Routes>
            <Foooter />
        </>
    );
}

export default PrivateRouter;