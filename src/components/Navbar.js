import CartWidget from './CartWidget'
import { Link } from "react-router-dom"
import { useCart } from '../context/cartContext'
import Cart from './Cart'

const NavBar = () => {
  const { count } = useCart()

  return (
      
      <div>
      


                      <div className="navbar bg-base-100">
  <div className="flex-1">
      <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='imagenLogo' src="https://i.imgur.com/FlwWHzm.png"></img></Link>
  </div>
  <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li><Link to='/home' className="btn btn-ghost normal-case text-xl">Home</Link></li>
        <li tabIndex={0}>
          <Link to='/shop' className="btn btn-ghost normal-case text-xl">Shop</Link>

          
        </li>
        <li>
        <Link to='/contact' className="btn btn-ghost normal-case text-xl">Contact</Link>
        </li>
      </ul>
      
    </div>
  
  <div className="flex-none">
      <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
                  <CartWidget></CartWidget>
          </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
          <span className="font-bold text-lg"><Cart/></span>
          
          <div className="card-actions">
              <button className="btn btn-primary btn-block"> <Link to="/cart"> Ver Carrito </Link></button>
          </div>
          </div>
      </div>
      </div>

      
  </div>
  </div>

      </div>
  )
}

export default NavBar