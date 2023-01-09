import './ButtonReturn.scss'
import { useNavigate } from 'react-router-dom'

export const ButtonReturn = () => {
    const navigate = useNavigate ()
    const handleReturn = () =>{
        navigate(-1)
    }
    return (
        <button onClick={handleReturn}> X </button>
    )
}