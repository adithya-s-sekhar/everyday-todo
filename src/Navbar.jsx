import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <div className="logo-text">everyday</div>
                <div className="logo-caption">daily task planner</div>
            </Link>
            <p style={{display: "inline-block"}}>X left(TODO)</p>
            <Link to="/add" className="add-button">
                Add Item
            </Link>
        </nav>
    );
}

export default Navbar