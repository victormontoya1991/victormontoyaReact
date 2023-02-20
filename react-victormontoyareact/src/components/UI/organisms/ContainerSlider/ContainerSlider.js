import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const ContainerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                <Link to="/sale" >
                    <img alt="Sale" src="https://firebasestorage.googleapis.com/v0/b/victor-montoya-rj.appspot.com/o/banners%2F112.png?alt=media&token=90b473d8-e933-4982-991d-ff504ecb015c" />
                </Link>
                <Link to="/category/Cascos">
                <img alt="Sale" src="https://firebasestorage.googleapis.com/v0/b/victor-montoya-rj.appspot.com/o/banners%2F111.png?alt=media&token=b0317e6f-2efb-494a-8b41-62ccb9930243" />
                </Link>
            </Slider>
        </div>
    );
}

export default ContainerSlider;