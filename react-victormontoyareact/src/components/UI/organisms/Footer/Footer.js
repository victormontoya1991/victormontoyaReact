import { useEffect, useState } from 'react';
import NavFooter from '../../atoms/NavFooter/NavFooter';
import ContFooter from '../../atoms/ContFooter/ContFooter';
import './Footer.scss'
// Importacion de data

export const Foooter = () => {
    
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    const [showSubMenu, setShowSubMenu] = useState(true);
    const handleClick = (subMenu) => {
        if (showSubMenu === subMenu) {
        setShowSubMenu(true);
        } else {
        setShowSubMenu(subMenu);
        }
    };
    return (
        <footer className='Footer'>
            <div className='ContainerFooter'>
                <section></section>
                {
                    540 >= windowSize[0]
                        ?<section>
                            <h3 onClick={() => handleClick("Category")} >Categorias</h3>
                            {showSubMenu === "Category" && (
                            <NavFooter />
                            )}
                        </section>
                        :<section>
                            <h3>Categorias</h3>
                            <NavFooter />
                        </section>
                }
                {
                    540 >= windowSize[0]
                    ?<section></section>
                    :<section className='ContaContact'>
                        <h3>Contacto</h3>
                        <ContFooter />
                    </section>
                }
                <section className='Abaut'>
                    <h3>Abaut</h3>
                    <p>
                        En nuestra tienda de equipamiento para motocicletas, ofrecemos una amplia variedad de guantes, pantalones, chaquetas y cascos para garantizar la seguridad y comodidad del motociclista. Visítanos y encuentra todo lo que necesitas para tus viajes en moto.
                    </p>
                </section>
            </div>
            <div className='ContainerCopy'>
                <p>Dis Vitor Montoya©</p>
                <p>Ecommer D1S</p>
            </div>
        </footer>
    );
}
