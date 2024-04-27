import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {PiCaretDownBold, PiCaretRightBold} from "react-icons/pi";
import "../styles.css";

MenuPanel.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    collapsed: PropTypes.bool,
};

function MenuPanel({title, children, collapsed}: any) {
    const [intCollapsed, setIntCollapsed] = useState(collapsed);

    return (
        <div>
            <div onClick={() => setIntCollapsed(!intCollapsed)}
                 className={`mb-2 menuPanel-header text-start ${!intCollapsed && "opacity-100"}`}
            >
                <span>{title}</span>
                <span className={"float-end"}>{intCollapsed ? (<PiCaretRightBold/>) : <PiCaretDownBold/>}</span>
            </div>

            {!intCollapsed && (
                <div className={"bg-white text-black p-2 rounded d-flex flex-column gap-2"}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default MenuPanel;
