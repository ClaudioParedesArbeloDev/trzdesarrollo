import './whatsapp.scss';

const whatsapp = () => {
    const phoneNumber = '5493413181379'; 

  const whatsappLink = `https://wa.me/${phoneNumber}`;
    return(
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img src="/img/whatsapp.svg" alt="icono whatsapp" className='whatsapp'/>
        </a>
    )
}

export default whatsapp