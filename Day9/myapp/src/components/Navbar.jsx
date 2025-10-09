import { Link, NavLink } from "react-router-dom";


function Navbar() {

    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/databinding" className="nav-link">Data Binding</NavLink>
                        <NavLink to="/offer" className="nav-link">VDOM</NavLink>
                        <NavLink to="/products" className="nav-link">Products</NavLink>
                        <NavLink to="/uncontrolled" className="nav-link">UnControlled</NavLink>
                        <NavLink to="/controlled" className="nav-link">Controlled</NavLink>
                        <NavLink to="/formik" className="nav-link">Add Product</NavLink>
                        <NavLink to="/product-list" className="nav-link">Products</NavLink>
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    </>)
}

export default Navbar;