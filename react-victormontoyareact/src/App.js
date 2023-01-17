import ItemListContainer from './components/page/category/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/page/product/ItemDetailContainer/ItemDetailContainer';
import { NavBar} from './components/UI/organisms/NavBar/NavBar';
import { PageContact } from './components/page/contact/contact';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import'./Apps.scss'
import { Foooter } from './components/UI/organisms/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/category/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/contact" element={ <PageContact /> }/>
        <Route path="/products/:producId" element = {<ItemDetailContainer /> }/>
        <Route path='*' element={<Navigate to={"/"} /> }/>
      </Routes>
      <Foooter />
    </BrowserRouter>
  );
}
export default App;