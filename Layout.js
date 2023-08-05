import {Link, Outlet} from "react-router-dom"

export default function useLayoutEffect(){
    return <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-brand" >Navbar</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <button className="btn btn-outline-success" aria-current="page"><Link to="/Home">Home</Link></button>
                        <button className="btn btn-outline-success" ><Link to="/Bikes">Items</Link></button>
                        <button className="btn btn-outline-success" ><Link to="/AddBikes">AddItem</Link></button>
                        <button className="btn btn-outline-success" ><Link to="/Search">Search</Link></button>
                    </div>
                    </div>
                </div>
            </nav>
        <Outlet/>
    </div>
}