import './SliderProduct.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from 'react'
import { collection, getDocs, query , where } from 'firebase/firestore'
import { db } from '../../../../firebase/config'
import ContainerItenProduct from '../../molecules/ContainerItenProduct/ContainerItenProduct';

const SliderProduct = () => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading ] = useState (true)
    const discount = 1
    useEffect(()=>{
        setLoading (true)
        //Ref Colection
        const productsRef = collection(db, "data_produc")
        const q = discount
                    ? query( productsRef, where("discount",">=",discount))
                    : productsRef
        //Peticion
        getDocs(q)
            .then((res) => {
                setProducts(res.docs.map((doc)=> {
                    return {
                        ...doc.data(),
                        id:doc.id
                    }
                }).slice(0, 12))
            })
            .finally(()=>{
                setLoading(false)
            })
    },[discount])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    };

    return (
        <div className='CarrucelProduc'>
            <h2>Sale Productos</h2>
            {
                loading
                    ?<div className='Loanding'>Cargando...</div>
                    :<Slider {...settings}>
                        { products.map ((produc) => <ContainerItenProduct key={produc.id} {...produc}/>)}
                    </Slider>
            }
        </div>
    );
}

export default SliderProduct;
