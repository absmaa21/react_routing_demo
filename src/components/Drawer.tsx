import React from 'react';
import PropTypes from 'prop-types';

Drawer.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

function Drawer({title, children}: any) {
    return (
        <div style={{width: "224px"}} className={"bg-primary text-white p-3 text-center"}>
            <h2>{title}</h2>
            {title && (<hr/>)}
            <div>
                {children}
            </div>
        </div>
    );
}

export default Drawer;
