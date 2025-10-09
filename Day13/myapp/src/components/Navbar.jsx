import { useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";


function Navbar() {

    const { currentUser, logoutClick, setCurrentDate } = useContext(UserContext);

    useEffect(()=> {
        setCurrentDate(new Date().toLocaleDateString());
    },[])
    
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {
                        (currentUser && currentUser !== null) ?

                            <div className="navbar-nav">
                                <NavLink to="/databinding" className="nav-link">Data Binding</NavLink>
                                <NavLink to="/offer" className="nav-link">VDOM</NavLink>
                                <NavLink to="/products" className="nav-link">Products</NavLink>
                                <NavLink to="/uncontrolled" className="nav-link">UnControlled</NavLink>
                                <NavLink to="/controlled" className="nav-link">Controlled</NavLink>
                                <NavLink to="/formik" className="nav-link">Add Product</NavLink>
                                <NavLink to="/product-list" className="nav-link">Products</NavLink>
                                <NavLink to="/redux" className="nav-link">Search(Redux)</NavLink>
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                Welcome: {currentUser} <a onClick={logoutClick} className="btn btn-primary">Logout</a>  

                            </div>
                            :
                            <NavLink to="/login" className="nav-link">Login</NavLink>
                    }
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar;