import './Home.scss'
import Responsive from "../../UI/organisms/SliderProduct/SliderProduct"
import ContainerCategory from '../../UI/organisms/ContainerCategory/ContainerCategory';

const Home = () => {
    return ( 
        <div className="MainHome" >
            {/* <Responsive /> */}
            <ContainerCategory />
        </div>
    );
}
export default Home;