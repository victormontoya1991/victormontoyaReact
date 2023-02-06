import './WindonTotal.scss'

export const WindonTotal = ({emptyCar, totalCar , discountCar,formatterPeso}) => {
    return (
        <div className="WindonTotal">
            <section className='ContainerEmpty'>
                <button onClick={emptyCar} className='ButtonEmpty'> 
                    <span className="material-icons md-50 del">delete</span>
                    Vaciar Car
                </button>
            </section>
            <section className="ContainTotal">
                <article className='SubTotal'> Sub-Total {formatterPeso.format(totalCar())}</article>
                <article className='Discunt'> Ahorro -{formatterPeso.format(discountCar())}</article>
                <article className='Total'> Total <p>{formatterPeso.format(totalCar()-discountCar())}</p></article>
            </section>
        </div>
    );
}

