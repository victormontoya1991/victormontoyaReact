import { useState } from 'react'
import './contact.scss'

const PageContact = () => {
    const [values, setValues] = useState({
        firstname :'',
        email:'',
        phone:''
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
            <form className="contact" onSubmit={handleSubmit} >
                <input 
                    onChange={handleInputChage}
                    value={values.firstname}
                    name='firstname'
                    type="text" 
                    placeholder="Nombre"
                    className='ImputClass'
                    /> <hr/>
                <input 
                    onChange={handleInputChage}
                    value={values.email}
                    name='email'
                    type="email" 
                    placeholder="Email"
                    /> <hr/>
                <input 
                    onChange={handleInputChage}
                    value={values.phone}
                    name='phone'
                    type="phone" 
                    placeholder="Telefono"
                    /> <hr/>
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default PageContact