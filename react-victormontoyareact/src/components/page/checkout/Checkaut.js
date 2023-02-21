import './Checkaut.scss'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCarContext } from '../../../context/CarContext'
import { db } from '../../../firebase/config'
import { collection, addDoc, documentId, writeBatch, where, query, getDocs } from 'firebase/firestore'

const User = () => {
    const {mycar, totalCar, formatterPeso, discountCar, emptyCar} = useCarContext()
    const [ordenId, setOrdenId] = useState(null)
    console.log(ordenId)
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
    const hadleSubmit = async (e) =>{
        e.preventDefault()
        let isFormValid = true;
        //Validacion datos
        if(values.name.length < 3){
            alert("Nombre inválido")
            isFormValid = false;
        }
        if (values.andress.length < 10) {
            alert('Dirección inválida. Debe tener al menos 10 caracteres.');
            isFormValid = false;
        }
        if (!/^\d{10}$/.test(values.phone)){
            alert('Teléfono inválido. Debe tener 10 dígitos numéricos.');
            isFormValid = false;
        }
        // eslint-disable-next-line no-useless-escape
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)){
            alert('Correo electrónico inválido.');
            isFormValid = false;
        }
        if (isFormValid) {
            //Modelado de la orden
            const order = {
                coustumer: values,
                items: mycar,
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
            <div className="container my-5">
                <h2>Tu compra ha sido exitosa</h2>
                <p>Tu código de orden es: {ordenId}</p>
                <Link to="/">Volver</Link>
            </div>
        )
    }
    if(mycar.length===0){
        return <Navigate to="/"/>
    }
    return (
        <div className='ContainerCheckaut'>
            <h2>Finalizar Compra</h2>
            <form onSubmit={hadleSubmit} className='DatesCheckaut'>
                <input
                    onChange={handleInputChange}
                    type='text'
                    name='name'
                    value={values.name}
                    placeholder='Nombre'
                />
                <input
                    onChange={handleInputChange}
                    type='text'
                    name='andress'
                    value={values.andress}
                    placeholder='Dirección'
                />
                <input
                    onChange={handleInputChange}
                    type='numb'
                    name='phone'
                    value={values.phone}
                    placeholder='Telefono'
                />
                <input
                    onChange={handleInputChange}
                    type='email'
                    name='email'
                    value={values.email}
                    placeholder='Email'
                />
                <button>Pago Contra Entrega</button>
            </form>
        </div>
    );
}

export default User;