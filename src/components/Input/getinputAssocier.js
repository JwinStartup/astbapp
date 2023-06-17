import React, { useEffect } from 'react'

function InputAssocier({associer}) {
   console.log(associer)
  return (
    <div>
          {associer.map(({id,name},index)=>{
                            return(
                            <div key={id}>
                                <div> (M/Mme/Mlle) : 
                                    <p  style={{width:"50%"}} type="text">{name}</p>
                                    <br/><br/> 
                                </div></div>)
                            })}
    </div>
  )
}

export default InputAssocier