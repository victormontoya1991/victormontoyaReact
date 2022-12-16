import './Navbar.scss'

const mainLogo = require.contest('../../assets/img', true);

export const NavBar = () => {

    return(
        <div>
            <img src={ mainLogo (`./logo_web.png`)} />
            <p>Este es un texto generico</p>
            <hr/>
        </div>
    )
}