import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import'./Apps.scss'
import ItemListContainer from './components/page/category/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/page/product/ItemDetailContainer/ItemDetailContainer';
import PageContact from './components/page/contact/contact';
import { NavBar} from './components/UI/organisms/NavBar/NavBar';
import { Foooter } from './components/UI/organisms/Footer/Footer';
import { CarContext } from './context/CarContext';
import { useState } from 'react';
import CarPage from './components/page/car/CarPage';

function App() {
  const [car,setCar] = useState ([])
  const addCar = (itemCar) => {
    setCar([...car, itemCar])
  }
  const isInCar = (id) => {
    return car.some(itemcar => itemcar.id === id)
  }
  return (
    <CarContext.Provider value={{car,addCar,isInCar}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/category/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/contact" element={ <PageContact /> }/>
          <Route path="/car" element={<CarPage /> } />
          <Route path="/products/:producId" element = {<ItemDetailContainer /> }/>
          <Route path='*' element={<Navigate to={"/"} /> }/>
        </Routes>
        <Foooter />
      </BrowserRouter>
    </CarContext.Provider>
  );
}
export default App;