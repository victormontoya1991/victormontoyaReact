import './ButtonOpen.scss';
import { useState } from 'react';

export const ButtonOpen = () => {
    const [show, setShow] = useState(false)

    const open = () => {
        setShow ( !show )
    }
    
    return (
        <div>
            <h2>Button Open</h2>
            <hr/>
            <button className="ButtonMore" onClick={open}>
                {show ? 'Close' : 'Open'}
            </button>
            {show && 
                <div>
                    <h3>Mostrar un contenido</h3>
                </div>}
        </div>
    )
}