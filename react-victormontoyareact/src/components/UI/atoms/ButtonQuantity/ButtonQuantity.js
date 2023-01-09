import './ButtonQuantity.scss';
import { useState } from 'react';


export const ButtonQuantity = () => {
    const [counter, setCounter] = useState(0)
    const more = () => {
        setCounter( counter + 1 )
    }
    const minus = () => {
        if (counter > 0 ){
            setCounter ( counter -1 )
        }
    }
    return (
        <div>
            <button className="ButtonMinus" onClick={minus}> - </button>
            <p className="Quantity">{counter}</p>
            <button className="ButtonMore" onClick={more}> + </button>
        </div>
    )
}

