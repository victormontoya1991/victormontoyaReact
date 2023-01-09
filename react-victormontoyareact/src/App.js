import ItemListContainer from './components/page/category/ItemListContainer/ItemListContainer';
import {ItemDetailContainer } from './components/page/product/ItemDetailContainer/ItemDetailContainer'
import { PageHeader } from './components/UI/organisms/PageHeader/Pageheader';
import { PageContact } from './components/page/contact/contact'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


import'./Apps.scss'

function App() {

  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/products/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/contact" element={ <PageContact /> }/>
        <Route path="/products/:producId" element = {<ItemDetailContainer /> }/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;