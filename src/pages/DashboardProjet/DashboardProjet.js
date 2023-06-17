import React, { useEffect, useState } from 'react'
import BtnRetourComponent from '../../components/btnRetourComponent'
import { useNavigate } from 'react-router-dom'
import Entete from '../../components/Entete/entete'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import Skeleton from 'react-loading-skeleton'
import { FaUserCircle } from 'react-icons/fa'
import { BsCircle, BsCircleFill, BsFillPlusCircleFill } from 'react-icons/bs'

function DashboardProjet (){
  const navigate = useNavigate()
  const [projet,setProjet]= useState(null)
  const getProjet= async() =>{
     const response = await fetchWrapper.get("http://localhost:8080/api/projet/liste");
     setProjet(response)
    
 }

 useEffect(() => {
    getProjet()
     },[])
 
return (
    <div>
    <Entete/>
    <BtnRetourComponent libelle={'Dashboard'} navigateur={()=>navigate('/dashboard')}/>

    <div style={{display:'flex',flexDirection:'column',alignItems: "end", margin: '0px 72px 0px 0px'}}> 
        <h3 style={{margin:"0px"}}>Liste des projets</h3>
        <hr style={{width:'1000px',margin:"0px"}}/>
    </div>   
     <div>
        

        {projet==null?
            <div style={{ display:"flex",
            flexWrap:'wrap',
            justifyContent: 'center',
            alignItems:'center'}}> {[1,2,3,4].map(()=><Skeleton style={{
              margin:'4px',
              width: '254px',
              height: '320px',
              padding:'4px',
              border: "none",
              borderRadius: '20px',
              background: '#f2f2f1',
              fontSize: '16px'
            }}/>)}</div>:<div
            style={{ display:"flex",
            flexWrap:'wrap',
            justifyContent: 'center',
            alignItems:'center'}}
            >

        {projet.map((u,index,array)=>
            <div
        style={{
              margin:'4px',
              width: '254px',
              height: '320px',
              display:'flex',
              flexDirection:'column',
              padding:'4px',
              border: "none",
              borderRadius: '20px',
              background: '#f2f2f1',
              fontSize: '16px'
            }}>
             <div> Projet <br/> {`<< ${u.nom_projet} >>`} </div>
             <div>slogan <br/><i style={{fontSize:'13px'}}> {`<< ${u.slogan} >>`}</i ></div>
             <div>Logo <br/></div>
             <div> Par <br/>
             {/*  <div>{u.creerPar.nom} {u.creerPar.prenom}</div>*/}
              </div>

           
           <div> 
        <button style={{
          border: '1px solid red',
          borderRadius: '5px',
          cursor: 'pointer',
          width:'100px',
          background:'red',
          fontSize:'20px',
          color:'white',
          margin:'4px'
        }} onClick={()=>navigate(`/projet/${u._id}`)}>
          voir
        </button >
           </div> 
        </div>
        )}
      </div>}
    </div>
    

    </div>
)

}
export default DashboardProjet