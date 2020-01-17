import React from 'react'
import {withRouter} from 'react-router-dom'

function AddLocation({history}){
    return (
        <div className="new-container container">
            <div className="new-inner-container">
                <button className="rn-btn rn-btn-add" onClick={() => history.push("/new") }>Add +</button>
            </div>
        </div>
    );
}

export default withRouter(AddLocation);