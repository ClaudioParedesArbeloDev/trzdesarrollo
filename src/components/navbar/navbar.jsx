import './navbar.scss'


const NavBar = () => {
    return(
        <header className='header'>
            <a href="/"><img src="/img/logoBlanco.png" alt="Logo Empresa" /></a>
            <nav>
                <a href="/empresa"><li>Empresa</li></a>
                <a href="/emprendimientos"><li>Emprendimientos</li></a>
                <a href="/unidades"><li>Unidades</li></a>
                <a href="/news"><li>News</li></a>
                <a href="/contacto"><li>Contacto</li></a>
            </nav>
            <div>
                <a href="/login">
                <p>COMPRAR</p>
                <i className="fa-regular fa-building"></i>
                </a>
            </div>
        </header>
    )
}

export default NavBar