import React from 'react';

function NavBar({ totalCounters }) {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar{" "}
                <div className="badge badge-pill badge-secondary">
                    {totalCounters}
                </div>
            </a>
        </nav>
    );   
}

export default NavBar;