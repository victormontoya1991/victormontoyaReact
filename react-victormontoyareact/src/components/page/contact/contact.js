import { useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './contact.scss'

const PageContact = () => {
    const [values, setValues] = useState({
        firstname :'',
        email:'',
        phone:'',
        messenger: ''
    })
    const handleInputChage = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit", values)
    }
    return(
        <div className="MainContact">
            <h2> Contacto de Soporte</h2>
            <form className="contact" onSubmit={handleSubmit} >
                <input 
                    onChange={handleInputChage}
                    value={values.firstname}
                    name='firstname'
                    type="text" 
                    placeholder="Nombre"
                    className='ImputClass'
                    />
                <input 
                    onChange={handleInputChage}
                    value={values.email}
                    name='email'
                    type="email" 
                    placeholder="Email"
                    />
                <input 
                    onChange={handleInputChage}
                    value={values.phone}
                    name='phone'
                    type="phone" 
                    placeholder="Telefono"
                    />
                <input 
                    onChange={handleInputChage}
                    value={values.messenger}
                    name='messenger'
                    type="text" 
                    placeholder="Mensaje"
                    />
                <button className='ButtonForm' >Enviar <ArrowForwardIcon /> </button>
            </form>
        </div>
    )
}

export default PageContact