import ItemListContainer from './components/UI/organisms/ItemListContainer/ItemListContainer';
import { PageHeader } from './components/UI/organisms/PageHeader/Pageheader';
import { PageContact } from './components/page/contact/contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import'./Apps.scss'

function App() {

  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/products/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/contact" element={ <PageContact /> }/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;