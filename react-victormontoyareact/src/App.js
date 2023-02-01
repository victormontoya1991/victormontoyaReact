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
  // Context Car
  const [car,setCar] = useState ([])
  const addCar = (itemCar) => {
    setCar([...car, itemCar])
  }
  // Filter Car ++conter
  const mycar = car.reduce((accumulator, counterCurrent) => {
    const idExists = accumulator.find(element => element.id === counterCurrent.id);
    if (idExists) {
      return accumulator.map((element) => {
        if(element.id === counterCurrent.id) {
          return {
            ...element,
            counter: element.counter + counterCurrent.counter
          }
        }
        return element;
      });
    }
    return [...accumulator, counterCurrent];
  }, []);
  // Filter Data Context
  const isInCar = (id) => {
    return car.some(itemCar => itemCar.id === id)
  }
  return (
    <CarContext.Provider value={{car,addCar,isInCar,mycar}}>
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