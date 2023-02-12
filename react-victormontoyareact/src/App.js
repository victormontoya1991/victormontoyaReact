import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import'./Apps.scss'
import ItemListContainer from './components/page/category/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/page/product/ItemDetailContainer/ItemDetailContainer';
import PageContact from './components/page/contact/contact';
import CarPage from './components/page/car/CarPage';
import { NavBar} from './components/UI/organisms/NavBar/NavBar';
import { Foooter } from './components/UI/organisms/Footer/Footer';
import { CarProvider } from './context/CarContext';
import User from './components/page/user/User';

function App() {
  return (
    <CarProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/category/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/products/:producId" element = {<ItemDetailContainer /> }/>
          <Route path="/contact" element={ <PageContact /> }/>
          <Route path="/car" element={<CarPage /> } />
          <Route path='*' element={<Navigate to={"/"} /> }/>
          <Route path='/page/user'element={<User />} />
        </Routes>
        <Foooter />
      </BrowserRouter>
    </CarProvider>
  );
}
export default App;