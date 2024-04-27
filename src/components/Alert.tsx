import React from 'react';
import PropTypes from 'prop-types';

Alert.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    isError: PropTypes.bool
};

function Alert({title, message, isError}: any) {
    return (
        <div className={"position-fixed bottom-0 end-0 me-3"}>
            <div className={"alert " + (isError ? "alert-danger" : "alert-primary")} role="alert">
                <h6>{title}</h6>
                <span>{message}</span>
            </div>
        </div>
    );
}

export default Alert;
