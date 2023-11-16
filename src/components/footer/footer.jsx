import './footer.scss'

const Footer = () => {
    return(
        <footer>
            <div className= 'leftSide'>
                <a href="home"><img src="/img/logoBlanco.png" alt="Logo Empresa" /></a>
                <div>
                    <a href="https://web.facebook.com/TRZGestionInmobiliaria/?_rdc=1&_rdr" target="blank"><img src="/img/facebook.svg" alt="logo facebook"/></a>
                    <a href="https://instagram.com/trz.gi?igshid=MzMyNGUyNmU2YQ==" target="blank"><img src="/img/instagram.svg" alt="logo instagram" /></a>
                </div>
            </div>
            <div>
                <h3>Contacto</h3>
                    <div>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Av Madres Plaza 25 de Mayo 3020 piso 11 oficina 4</p>
                        <p>Rosario - Argentina - CP2000</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-envelope"></i><p>comercial@trz.com.ar</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-phone"></i><p>+5493417525735</p>
                    </div>
            </div>
            <div></div>
        </footer>
    )
}

export default Footer