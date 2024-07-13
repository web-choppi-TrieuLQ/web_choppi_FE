import React from 'react';
import './Sidebar.css';
import button from "bootstrap/js/src/button";
import {Link} from "react-router-dom";

const Sidebar = ({onLogout}) => {
    const handleLogout = async () => {
        onLogout();
    };
    return (
        <div className="sidebar bg-light">
            <div className="sidebar-header">
                <h3>ADMIN PAGE</h3>
            </div>
            <ul className="list-unstyled components">
                <li className="active">
                    <a href="#dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Dashboard</a>
                </li>
                <li>
                    <Link to="/admin/product/list" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Product List</Link>
                </li>
                <li>
                    <Link to="/admin/product/create" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Add Product</Link>
                </li>
                <li>
                    <a href="#forms" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Forms</a>
                </li>
                <li>
                    <a href="#charts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Charts</a>
                </li>
                <li>
                    <a href="#proVersion" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pro Version</a>
                </li>
            </ul>
            <button className="btn btn-primary" onClick={() => handleLogout()}>Logout</button>
        </div>
    );
}

export default Sidebar;
