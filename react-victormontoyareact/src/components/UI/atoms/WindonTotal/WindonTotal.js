import './WindonTotal.scss'

export const WindonTotal = ({emptyCar, totalCar}) => {
    return (
        <div className="WindonTotal">
                <article className='ContainerEmpty'>
                    <button onClick={emptyCar} className='ButtonEmpty'> 
                        <span className="material-icons md-50 del">delete</span>
                        Vaciar Car
                    </button>
                </article>
            <section>
                <article className='Discunt'> Decuento -$20.000</article>
                <article className='Total'> Total ${totalCar()}</article>
            </section>
        </div>
    );
}

