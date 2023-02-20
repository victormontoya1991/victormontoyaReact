import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCarContext } from '../../../context/CarContext'
import './Checkaut.scss'

const User = () => {
    const {mycar, totalCar, formatterPeso, discountCar} = useCarContext()
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
    const hadleSubmit = (e) =>{
        e.preventDefault()
        //Validacion datos
        if(values.name.length < 3){
            alert("Nombre invalido")
        }
        if (values.andress.length < 10) {
            alert('Dirección inválida. Debe tener al menos 10 caracteres.');
        }
        if (!/^\d{10}$/.test(values.phone)) {
            alert('Teléfono inválido. Debe tener 10 dígitos numéricos.');
        }
        // eslint-disable-next-line no-useless-escape
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
            alert('Correo electrónico inválido.');
        }
        //Modelado de la orden
        const order = {
            coustumer: values,
            items: mycar,
            total: formatterPeso.format(totalCar()-discountCar())
        }

        console.log(order)
    }
    if(mycar.length===0){
        return <Navigate to="/"/>
    }
    return (
        <div className='ContainerCheckaut'>
            <h2>Finalizar Compra</h2>
            <form onSubmit={hadleSubmit}>
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
                <button>Enviar</button>
            </form>
        </div>
    );
}

export default User;