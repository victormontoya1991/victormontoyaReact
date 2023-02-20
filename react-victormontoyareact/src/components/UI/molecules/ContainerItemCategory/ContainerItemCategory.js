import { Link } from "react-router-dom";

const ContainerItemCategory = ({category, image}) => {
    return (
        <Link to={`/category/${category}`}>
            <h3>{category}</h3>
            <img alt='Category' src={image}/>
        </Link>
    );
}

export default ContainerItemCategory;