import './ButtonReturn.scss'
import { useNavigate } from 'react-router-dom'

export const ButtonReturn = () => {
    const navigate = useNavigate ()
    const handleReturn = () =>{
        navigate(-1)
    }
    return (
        <button className='IconRetur' onClick={handleReturn}> 
            <span className="material-icons md-70">close</span>
        </button>
    )
}