import React, { useEffect, useState } from 'react'
import BtnRetourComponent from '../../components/btnRetourComponent'
import { useNavigate } from 'react-router-dom'
import Entete from '../../components/Entete/entete'
import { fetchWrapper } from '../../reducer/helpers/helpers'
import Skeleton from 'react-loading-skeleton'
import { FaUserCircle } from 'react-icons/fa'
import { BsCircle, BsCircleFill, BsFillPlusCircleFill } from 'react-icons/bs'

function ListeUtilisateurs (){
  const navigate = useNavigate()
  const [users,setUsers]= useState(null)
  const getUtilisateurs= async() =>{
     const response = await fetchWrapper.get("http://localhost:8080/api/users/liste");
     setUsers(response)
    
 }

 useEffect(() => {
    getUtilisateurs()
     },[])
 
return (
    <div>
    <Entete/>
    <BtnRetourComponent libelle={'Dashboard'} navigateur={()=>navigate('/dashboard')}/>

    <div style={{display:'flex',flexDirection:'column',alignItems: "end", margin: '0px 72px 0px 0px'}}> 
        <h3 style={{margin:"0px"}}>Liste des utilisateurs</h3>
        <hr style={{width:'1000px',margin:"0px"}}/>
    </div>   
    <div>
        

        {users==null?
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

        {users.map((u,index,array)=>
        <div style={{
            margin:'4px',
            width: '254px',
            height: '300px',
            padding:'4px',
            border: "none",
            borderRadius: '20px',
            background: '#f2f2f1',
            fontSize: '16px',
          }}>
                 <div> 
                   <FaUserCircle size={100} className="faUser"/>
                   <BsCircleFill size={20} 
                   style={{
                    position: 'relative',
                    zIndex: '2',
                    right: '28px',
                    fillOpacity: '0.9',
                    color:u.connexionStatut=='oui'?'green': 'red',
                    top: '-8px',
                   }}
                   
                   />
                 </div>
                  <div style={{
                    textAlign: 'center',
                    fontSize: '20px',
                    width: '100%'}}>
                        {u.nom } {u.prenom }
                    </div>
                  <div style={{
                    textAlign: 'center',
                    fontSize: '15px',
                    width: '100%'}}>
                        {u.email}
                    </div>
                  <div style={{
                    textAlign: 'center',
                    fontSize: '15px',
                    width: '100%'}}>
                          {u.sexe}
                    </div>
                    <div style={{
                      textAlign: 'center',
                      fontSize: '15px',
                      width: '100%'}}>
                            {u.habitation}
                      </div>
                      <div style={{
                        textAlign: 'center',
                        fontSize: '15px',
                        width: '100%'}}>
                              {u.profession}
                        </div>
                        <div style={{
                          textAlign: 'center',
                          fontSize: '15px',
                          width: '100%'}}>
                                {u.situation}
                          </div>
                  <div style={{
                    textAlign: 'center',
                    fontSize: '15px',
                    width: '100%'}}>
                      {u.contact} / {u.numeroConfirme}
                    </div>
                  
        <button style={{
          border: '1px solid red',
          borderRadius: '5px',
          cursor: 'pointer',
          width:'100px',
          background:'red',
          fontSize:'20px',
          color:'white',
          margin:'4px'
        }} onClick={()=>navigate(`/profil/${u._id}`)}>
          voir
        </button >
        
        </div>)}
      </div>}
    </div>

    </div>
)

}
export default ListeUtilisateurs