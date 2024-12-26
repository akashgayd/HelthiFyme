import './nav.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = ()=>{


    const navigate = useNavigate()


    return(

        <>
        
        <div className="navbar">

<img src="imeges/Logo.png"/>

<Link to="/app"><button className="getApp">Get App</button></Link>






        </div>

        </>

    )
}
export default Navbar;