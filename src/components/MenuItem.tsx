import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    useHoverEffect: PropTypes.bool,
};

function MenuItem({title, path}: any) {
    return (
        <div className={"btn btn-toolbar menuItem"}>
            <NavLink className={"nav-link"} to={path}>{title}</NavLink>
        </div>
    );
}

export default MenuItem;
