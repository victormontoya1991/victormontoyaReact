import { createContext, useEffect, useState} from "react";

export const CarContext = createContext ()
const init = JSON.parse(localStorage.getItem('car'))|| []
export const CarProvider = ({children}) =>{
    const [car,setCar] = useState([...init])
    const addCar = (itemCar) => {
        setCar([...car, itemCar])
    }
    // Filter Data Context
    const isInCar = (id) => {
        return car.some(itemCar => itemCar.id === id)
    }
    //Delete iItem
    const deleteCar = (id) => {
        setCar(car.filter(itemCar => itemCar.id !== id))
    }
    // Delete Car
    const emptyCar = () => {
        setCar([])
    }
    
    // Reduce Car ++conter
    const mycar = car.reduce((accumulator, itemCar) => {
        const idExists = accumulator.find(element => element.id === itemCar.id);
        if (idExists) {
        return accumulator.map((element) => {
            if(element.id === itemCar.id) {
            return {
                ...element,
                counter: element.counter + itemCar.counter
            }
            }
            return element;
        });
        }
        return [...accumulator, itemCar];
    }, []);
    // Local Storage
    useEffect(() => {
        localStorage.setItem('car',JSON.stringify(car))
    },[car])

    // Total Car
    const totalCar = ()=>{
        return mycar.reduce((acc, itemCar)=> acc + itemCar.price * itemCar.counter, 0 )
    }
    // Discount Car
    const discountCar = ()=>{
        return mycar.reduce((acc, itemCar)=> acc +((itemCar.price*itemCar.discount)/100) * itemCar.counter, 0 )
    }   
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
    return ( 
        <CarContext.Provider value={{car,addCar,isInCar,deleteCar,emptyCar,totalCar, discountCar ,mycar,formatterPeso}}> 
            {children}
        </CarContext.Provider>
    )

}

