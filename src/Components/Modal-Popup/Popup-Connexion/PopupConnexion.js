import React, { useState } from 'react'
import './Connexion.css'
const PopupConnexion = () => {
    const [type, setType] = useState(true);
    const handleToggle = () => {
        setType(!type)
        const inputType = document.getElementById('InputPassword').getAttribute('type')
        console.log(inputType)
        if (inputType ==='password'){
            document.getElementById('InputPassword').setAttribute('type', 'text')
        } else {
            document.getElementById('InputPassword').setAttribute('type', 'password')
         }
    }
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <button type="button" className="btn btn-danger">
                <i className="fa-regular fa-user"></i> Je me connect
              </button>
              <button type="button" className="btn btn-outline-gray">
                <i className="fa-solid fa-file-pen"></i> Inscription
              </button>
            </div>
            <div className="form-grp">
              <h3>Bienvenue.</h3>
              <h4>Veuillez saisir votre email et votre mot de passe</h4>
              <form className="mt-4">
                <div className="mb-3">
                  <input type="email" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Example@gmail.com"/>
                </div>
                <div className="pass-field mb-3">
                  <input type="password" className="form-control p-2" id="InputPassword" placeholder="Mot de passe"/>
                  {type ? <i className="bi bi-eye-slash" id="togglePassword" onClick={handleToggle}></i>
                  : <i className="bi bi-eye" id="togglePassword" onClick={handleToggle}></i>}
                </div>
                <p>By login, you agree to our <a href="!#">Terms & conditions</a></p>
                <div className="modal-foot">
                  <button type="submit" className="btn btn-danger">Connexion</button>
                  <a href="!#">Forget password</a>
                </div>
              </form>
            </div>
            
          </div>
        </div>
        </div>
    </div>
    )
}

export default PopupConnexion