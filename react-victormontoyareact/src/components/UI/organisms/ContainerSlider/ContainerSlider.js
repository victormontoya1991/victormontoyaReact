import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../firebase/config'
import ItemSlider from '../../molecules/ItemSliders/ItemSliders'

const ContainerSlider = () => {
    const [slider, setSlider] = useState ([])
    useEffect(()=>{
        //Ref Colection
        const categoryRef = collection(db, "data_slider")
        //Peticion
        getDocs(categoryRef)
            .then((res) => {
                setSlider(res.docs.map((doc)=> {
                    return {
                        ...doc.data(),
                        id:doc.id
                    }
                }).slice(0, 4))
            })
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='ContainerSlider'>
            <Slider {...settings}>
                {slider.map ((slid) => <ItemSlider key={slid.id} {...slid}/>)}
            </Slider>
        </div>
    );
}

export default ContainerSlider;