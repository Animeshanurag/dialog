import React from "react";
import {
    withRouter
} from "react-router-dom";

export const BackButton = ( props ) =>
{
    return (
        <button
            onClick={ () => props.history.goBack() }
            className="button"
        >
            Go back
        </button>
    );
}
export default withRouter( BackButton );