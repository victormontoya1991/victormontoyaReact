
import { ButtonReturn } from '../../atoms/ButtonReturn/ButtonReturn'
import'./ContainerDetail.scss'

const ContainerDetail = ({id, name, image, descrition, price}) => {
    
    return(
        <div className="ContainerDetail">
            <img alt="{name}" src={image}/>
            <h2>{name}</h2>
            <p>{descrition}</p>
            <h3>${price}</h3>
            <ButtonReturn />
        </div>
    )
}

export default ContainerDetail