import React from 'react'
import './inscription.css'
const InscriptionPopup = () => {
  return (
    // <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
    //     Launch demo modal
    // </button>
    <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-md">
            <div className="modal-content">
                <div className="modal-header d-flex justify-content-end">
                    <button type="button" className="close d-flex align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div className="modal-body mb-4">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <div className="main-btns">
                        <button type="button" className="btn btn-connect">
                            <i className="fa-regular fa-user"></i> Je me connect
                        </button>
                        <button type="button" className="btn btn-danger">
                            <i className="fa-solid fa-file-pen"></i> Inscription
                        </button>
                    </div>
                    <div className="form-grp ">
                        <h3>J'ouvre mon compte eSorec.</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h4>
                        <div className="d-flex align-items-center justify-content-center">
                            <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">J'ouvre mon compte</button>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InscriptionPopup