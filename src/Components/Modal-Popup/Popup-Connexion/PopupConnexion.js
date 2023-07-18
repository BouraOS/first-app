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
    <div className="modal fade" id="popupConnexion" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-end">
            <button type="button" className="close d-flex align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="modal-body mb-4">
            <h1 className='text-center m-auto'>Lorem ipsum dolor sit amet</h1>
            <div className="main-btns">
              <button type="button" className="btn red-btn" >
                <i className="fa-regular fa-user"></i> Je me connect
              </button>
              <button type="button" className="btn btn-outline-gray" data-bs-toggle="modal" data-bs-target="#popupInscription">
                <i className="fa-solid fa-file-pen red-icon"></i> Inscription
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
                  <button type="submit" className="btn">Connexion</button>
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