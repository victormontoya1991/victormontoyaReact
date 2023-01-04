import ItemListContainer from './components/UI/organisms/ItemListContainer/ItemListContainer';

import { PageHeader } from './components/PageHeader/Pageheader';

import'./Apps.scss'

function App() {

  return (
    <div>
      <PageHeader />
      <ItemListContainer />
    </div>
  );
}

export default App;

