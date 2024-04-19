import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    useHoverEffect: PropTypes.bool,
};

function MenuItem({title, path, useHoverEffect}: any) {
    const [isHovered, setIsHovered] = useState(false);

    function handleHover() {
        if(useHoverEffect) setIsHovered(!isHovered);
    }

    return (
        <div className={isHovered ? "btn btn-toolbar bg-dark bg-opacity-10" : "btn btn-toolbar"} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <NavLink className={"nav-link"} to={path}>{title}</NavLink>
        </div>
    );
}

export default MenuItem;
