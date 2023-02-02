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
            <section className='Stock'>
                <p className='NumbStock'>{stockAc}</p>
                <h6 className='TitleStock'>Unid.</h6>
            </section>
            <section className="ContainerQuantity">
                <article className='TitleQuantity' >
                    <h6>Cantidad:</h6>
                </article>
                <article className='ButtonQuantity'>
                    <button className="ButtonMinus" onClick={handleMinus}>
                        <span className="material-icons md-70">remove</span>
                    </button>
                    <p className="Quantity">{counter}</p>
                    <button className="ButtonMore" onClick={handleMore}>
                        <span className="material-icons md-70">add</span>
                    </button>
                </article>
            </section>
            {
                (stockAc+1 <= counter)
                ?<section className="ContainerButton">
                        <div className='Alert'> 
                            <span className="material-icons md-70">info_outline</span>
                            <p>Upss... Solo hay {stockAc} disponibles...</p>
                        </div>
                    </section>
                :<section className="ContainerButton">
                    <button className="ButtonCar" onClick={onAdd} >Agregar Carrito</button>
                </section>
            }
        </div>
    )
}

