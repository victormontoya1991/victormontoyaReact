import './Checkaut.scss'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCarContext } from '../../../context/CarContext'
import { db } from '../../../firebase/config'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { collection, addDoc, documentId, writeBatch, where, query, getDocs } from 'firebase/firestore'

const User = () => {
    const {mycar, totalCar, formatterPeso, discountCar, emptyCar} = useCarContext()
    const [ordenId, setOrdenId] = useState(null)
    const[values, setValues] = useState({
        name: '',
        andress: '',
        phone: '',
        email: ''
    })
    const handleInputChange =(e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const [errorMessages, setErrorMessages] = useState({
        name: '',
        address: '',
        phone: '',
        email: ''
    });
    const hadleSubmit = async (e) =>{
        e.preventDefault()
        let isFormValid = true;
        //Validacion datos
        if(values.name.length < 3){
            setErrorMessages(prevState => ({
                ...prevState,
                name: "Nombre inválido"
            }));
            isFormValid = false;
            return;
        }
        if (values.andress.length < 10) {
            setErrorMessages(prevState => ({
                ...prevState,
                address: 'Dirección inválida. Debe tener al menos 10 caracteres.'
            }));
            isFormValid = false;
            return;
        }
        if (!/^\d{10}$/.test(values.phone)){
            setErrorMessages(prevState => ({
                ...prevState,
                phone: 'Teléfono inválido. Debe tener 10 dígitos numéricos.'
            }));
            isFormValid = false;
            return;
        }
        // eslint-disable-next-line no-useless-escape
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
            setErrorMessages(prevState => ({
                ...prevState,
                email: 'Correo electrónico inválido.'
            }));
            isFormValid = false;
            return;
        }
        if (isFormValid) {
            //Modelado de la orden
            const order = {
                coustumer: values,
                items: mycar,
                descuento: discountCar(),
                total: formatterPeso.format(totalCar()-discountCar())
            }
            // Llamado de stock en base de datos y data reposa la orden
            const batch = writeBatch(db)
            const ordenRef = collection(db,'data_orders')
            const producRef = collection (db, 'data_produc')
            // Construccion de array sin inventario o stock
            const outOfStock = []
            const itemsRef= query(producRef, where( documentId(),'in', mycar.map(prod => prod.id))) 
            const productsCar = await getDocs(itemsRef)
            productsCar.docs.forEach(doc => {
                const item = mycar.find(item=> item.id === doc.id)
                if(doc.data().stock >= item.counter){
                    batch.update(doc.ref, {
                        stock: doc.data().stock - item.counter
                    })
                } else {
                    outOfStock.push(item)
                }
            })
            if(outOfStock.length === 0){
                batch.commit()
                    .then(()=>{
                        addDoc(ordenRef, order)
                            .then((doc)=> {
                                setOrdenId(doc.id)
                                emptyCar()
                            }) 
                            .catch((err)=> console.log(err))
                    })
            } else {
                alert ("Upss algunos productos no tenemos el stock suficiente para la orden")
            }
        }
    }
    if(ordenId){
        return (
            <div className="ContainerExit">
                <h2>Tu compra ha sido exitosa</h2>
                <p>Tu código de orden es:</p>
                <h3>{ordenId}</h3>
                <p>Llegara a tu email un resumen de tu compra</p>
                <Link className='ButtonForm' to="/">Volver <ArrowForwardIcon /></Link>
            </div>
        )
    }
    if(mycar.length===0){
        return <Navigate to="/"/>
    }
    return (
        <div className='ContainerCheckaut'>
            <h2>Finalizar Compra</h2>
            <div className='ContainerTotal'>
                <p className='Mont'> Monto: {formatterPeso.format(totalCar())}</p>
                <p className='Disc'> Ahorro: {formatterPeso.format(-discountCar())}</p>
                <h3> Total: {formatterPeso.format(totalCar()-discountCar())}</h3>
            </div>
            <form onSubmit={hadleSubmit} className='DatesCheckaut'>
                <input
                    onChange={handleInputChange}
                    type='text'
                    name='name'
                    value={values.name}
                    placeholder='Nombre'
                />
                {errorMessages.name && <p className="error-message">{errorMessages.name}</p>}
                <input
                    onChange={handleInputChange}
                    type='text'
                    name='andress'
                    value={values.andress}
                    placeholder='Dirección'
                />
                {errorMessages.address && <p className="error-message">{errorMessages.address}</p>}
                <input
                    onChange={handleInputChange}
                    type='numb'
                    name='phone'
                    value={values.phone}
                    placeholder='Telefono'
                />
                {errorMessages.phone && <p className="error-message">{errorMessages.phone}</p>}
                <input
                    onChange={handleInputChange}
                    type='email'
                    name='email'
                    value={values.email}
                    placeholder='Email'
                />
                {errorMessages.email && <p className="error-message">{errorMessages.email}</p>}
                <p>Realiza tus pedidos y pagalos en casa.</p>
                <button className='ButtonForm' >Pago Contra Entrega <ArrowForwardIcon /></button>
            </form>
        </div>
    );
}

export default User;