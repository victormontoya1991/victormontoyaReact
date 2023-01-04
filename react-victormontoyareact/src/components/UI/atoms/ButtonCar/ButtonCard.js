import './ButtonCar.scss';
import { useState } from 'react';


export const ButtonCard = () => {
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
            <h2>Button Card</h2>
            <hr/>
            <button className="ButtonMore" onClick={more}> + </button>
            <button className="ButtonMinus" onClick={minus}> - </button>
            <p>{counter}</p>
        </div>
    )
}

