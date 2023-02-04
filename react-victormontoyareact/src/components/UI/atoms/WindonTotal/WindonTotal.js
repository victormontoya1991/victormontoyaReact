import './WindonTotal.scss'

export const WindonTotal = ({emptyCar, totalCar}) => {
    return (
        <div className="WindonTotal">
            <section className='ContainerEmpty'>
                <button onClick={emptyCar} className='ButtonEmpty'> 
                    <span className="material-icons md-50 del">delete</span>
                    Vaciar Car
                </button>
            </section>
            <section className="ContainTotal">
                <article className='Discunt'> Ahorro -$20.000</article>
                <article className='Total'> Total <p>${totalCar()}</p></article>
            </section>
        </div>
    );
}

