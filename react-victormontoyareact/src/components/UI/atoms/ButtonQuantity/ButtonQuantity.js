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
        <div className='NubQuantity'>
            <section className='TitleQuantity' >
                <h6>Cantidad:</h6>
            </section>
            <section className='ButtonQuantity'>
                <button className="ButtonMinus" onClick={minus}>
                    <span className="material-icons md-70">remove</span>
                </button>
                <p className="Quantity">{counter}</p>
                <button className="ButtonMore" onClick={more}>
                    <span className="material-icons md-70">add</span>
                </button>
            </section>
        </div>
    )
}

