import React from 'react'
import { BiChevronDownCircle } from 'react-icons/bi'
import './formBesoin.css'
function FormBesoin(props) {
  return (
    <div className='ItemSousEltBpBe'>

        <div className="ItemSousEltBpHautBe">
            <div className='ItemSousEltBpHautGaucheBe'> 
            <div className="ItemBpNbrBe">1</div> <div className="ItemBpDescBe">Besoins auxquels répond le projet</div>
             </div>
             <div className='ItemSousEltBpHautDroiteBe'> <BiChevronDownCircle  size={30}/> </div>
        </div>

        <div className="ItemSousEltBpBasBe">
            
            <textarea name="" id="" cols="30" rows="10" placeholder="Ce projet vise en general à répondre aux besoins que sont:">

            </textarea>


            <button className="NTLBe">Enregistrer</button>
            </div>

    </div>
  )
}

export default FormBesoin