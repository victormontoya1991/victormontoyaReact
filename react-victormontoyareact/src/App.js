import ItemListContainer from './components/UI/organisms/ItemListContainer/ItemListContainer';
import { PageHeader } from './components/UI/organisms/PageHeader/Pageheader';

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

