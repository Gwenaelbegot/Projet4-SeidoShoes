import { Link } from "react-router-dom";

import './NavBar.css'

import Seido from "../assets/logoBoutique.png";
import Panier from "../assets/Panier.png";



function NavBar() {
    return (
        <div className='NavBar'>
            <ul className='NavList'>
                <Link className="LinkNav" to="/">
                <li><p>Accueil</p><p className='text-jap'>ホーム</p></li>
                </Link>
                <Link className="LinkNav" to='/Shop'>
                <li><p>Shop</p><p className='text-jap'>店</p></li>
                </Link>
                <li><img className='Seido-img' src={Seido} alt="logo seido" /></li>
                <Link className="LinkNav" to="/Admin">
                <li><p>Admin</p><p className='text-jap'>接触</p></li>
                </Link>
                <li><img className='Panier-img' src={Panier} alt="logo panier" /></li>
            </ul>
        </div>
    )
}

export default NavBar;