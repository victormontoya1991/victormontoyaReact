import'./Apps.scss'
import { CarProvider } from './context/CarContext';
import { LoginProvider } from './context/LoginContext';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <LoginProvider >
      <CarProvider>
        <AppRouter />
      </CarProvider>
    </LoginProvider>
  );
}
export default App;