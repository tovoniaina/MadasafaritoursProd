import React from 'react'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';


function Newsletter(props) {
    return (
       
            <div {...props} className="modal fade" id="staticBackdrops" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content modalBookNow">
                        <div className="modal-header">
                            <h3 className="modal-title text-center" id="staticBackdropLabel">Subscription</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                                <h5>You have been subscribed successfully</h5>
                           
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> <DoNotDisturbOnIcon /> Close</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Newsletter