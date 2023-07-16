import React from 'react'

const Boxes = () => {
    return (
        <div className='boxes row g-4'>
            <div className='red-box col-12 col-sm-7'>
                <div class="row ">
                    <div class="col-7">
                        <div className='card-inf '>
                            <h5 class="card-title">J'ouvre mon compte eSorec.</h5>
                            <p class="card-text ">Hacque adfabilitate confisus cum eadem postridie</p>
                            <button type="button" class="btn btn-light">J'ouvre mon compte</button>  
                        </div>
                    </div>
                    <div class="col-5 ">
                        <img src={require('../../Assets/pexels-1.jpg')} alt="..."/>
                    </div>
                </div>
            </div>
            <div className='white-box col-12 col-sm-5'>
                <div class="card h-100 d-flex align-items-md-center ">
                    <div class="card-body text-center">
                        <h5 class="card-title">J'ai un compte eSorec.ma</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <button type="button" class="btn btn-danger">Connexion</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boxes