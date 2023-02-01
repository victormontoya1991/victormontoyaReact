import './ButtonQuantity.scss';

export const ButtonQuantity = ({counter, setCounter, max, onAdd, stockAc}) => {
    const handleMore = () => {
        counter < max && setCounter( counter + 1 )
    } 
    const handleMinus = () => {
        counter > 1 && setCounter ( counter -1 )
    }
    return (
        <div className='NubQuantity'>
            <section className='TitleQuantity' >
                <h6>Cantidad:</h6>
            </section>
            <section className='ButtonQuantity'>
                <button className="ButtonMinus" onClick={handleMinus}>
                    <span className="material-icons md-70">remove</span>
                </button>
                <p className="Quantity">{counter}</p>
                <button className="ButtonMore" onClick={handleMore}>
                    <span className="material-icons md-70">add</span>
                </button>
            </section>
            {
                (stockAc+1 <= counter)
                ?<div><p>Debes solicitar una cantidad menor al stock actual: {stockAc}</p></div>
                :<button className='ButtonCar' onClick={onAdd} >Agregar Carrito</button>
            }
        </div>
    )
}

