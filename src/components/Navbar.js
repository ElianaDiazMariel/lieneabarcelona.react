import CartWidget from './CartWidget'

const navbar = () =>{
    return (
        <nav>
            <div className='options__nav-left'>
                <ul>
                    <li><a href='#'>Productos</a></li>
                    <li><a href='#'>Nosotros</a></li>
                    <li><a href='#'>Contacto</a></li>
                </ul>
            </div>
            <div className='logo__nav'>
                <h1><a href='#'>Linea Barcelona </a></h1>

    
            </div>
            <div className='options__nav-right'>
                <ul>
                    <>
                    <CartWidget></CartWidget>
                    </>
                </ul>
            </div>
        </nav>
    )
}

export default navbar