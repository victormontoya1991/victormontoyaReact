import './Home.scss'
import Responsive from "../../UI/organisms/SliderProduct/SliderProduct"
import ContainerCategory from '../../UI/organisms/ContainerCategory/ContainerCategory';
import ContainerSlider from '../../UI/organisms/ContainerSlider/ContainerSlider';

const Home = () => {
    return ( 
        <div className="MainHome" >
            <ContainerSlider />
            <ContainerCategory />
            <Responsive />
        </div>
    );
}
export default Home;