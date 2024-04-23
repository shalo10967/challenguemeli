import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Breadcrumb.css';

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(p => p);

    return (
        <div className="breadcrumb-container">
            {paths.map((path, index) => (
            <span key={index}>
                <Link to={`/${paths.slice(0, index + 1).join('/')}`}>
                    {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
                {index < paths.length - 1 && <span className="separator"> / </span>}
            </span>
        ))}
        </div>
    )
}
export default Breadcrumb;

