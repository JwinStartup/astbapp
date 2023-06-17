import 'react-loading-skeleton/dist/skeleton.css'
import React, { useEffect, useState } from 'react'
import Backdrop from '../../components/Backdrop/Backdrop'
import Entete from '../../components/Entete/entete'
import CreactionProjet from '../../components/creactionProjet/creactionProjet'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWrapper } from '../../reducer/helpers/helpers';
import { useNavigate } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import Skeleton from 'react-loading-skeleton'
import Poli from "../../Assets/BGSVG/Polygone3.png"
import arc from "../../Assets/BGSVG/Polygone1.svg"
import Vert from "../../Assets/BGSVG/PolygoneV.png"
import { BsFillLockFill, BsFillUnlockFill, BsPlusCircle } from 'react-icons/bs';
import { FaChevronLeft } from 'react-icons/fa';

import './projet.css'
import BtnRetourComponent from '../../components/btnRetourComponent'


function Projet() {
 const { user} = useSelector(x => x.auth);
 const navigate = useNavigate()
    const tab= [{_id:null,nom_projet:"Creer un nouveau projet"}]
    const [clickprojet, setClickprojet] = useState(false)
    const [loading,setLoading] = useState(false)
    const [listeProjet,setListeProjet]= useState([])
   const  getProjet=async ()=>{
     const response = await fetchWrapper.post("http://localhost:8080/api/projet/voir",{
      userId: user.user._id,
    });
     setListeProjet([...listeProjet,response])
     setLoading(false)
   }
   const onDelete=async(p)=>{
    const response = await fetchWrapper.delete(`http://localhost:8080/api/projet/delete`,{id:p})
    navigate('/')
  }
  useEffect(() => {
    setLoading(true) 
    setListeProjet([...listeProjet,tab])
     console.log(listeProjet)
   setTimeout(()=>{getProjet()},1000)  
 }, [])   

 
 return (
   <div >

         <Entete/>
         <img src={arc} style={{
          position: 'absolute',
          zIndex:'-2',
          width: '800px',
          height: '500px',
          left: '2px',
        }} />
        <img src={Poli} 
        style={{
          position: 'absolute',
          zIndex:'-2',
          width: '200px',
          height: '150px',
          left: '200px',
           top:'5%'

        }}
        
        />
        <img src={Vert} 
        style={{
          position: 'absolute',
          zIndex:'-2',
          width: '200px',
          height: '150px',
          left:'90px'

        }}
        
        />
            <div>
            <BtnRetourComponent libelle={'retour'} navigateur={()=>navigate('/')}/>
                 
               {loading==true?
            <div style={{ display:"flex",
            flexWrap:'wrap',
            justifyContent: 'center',
            alignItems:'center'}}> { [1,2,3,4].map(()=><Skeleton style={{
                width: '254px',
                height: '250px',
                border: 'none',
                borderRadius: '20px',
                margin: '10px'
            }}/>)}</div>:
                 <div>{listeProjet.flatMap((u,i,k)=>
                 <div key={i} 
                  style={{
                    display:"flex",
                  flexWrap:'wrap',
                  justifyContent: 'center',
                  alignItems:'center'
                  }}>
                    <button onClick={()=> navigate('/projet/creer')}
                style={{width:"254px",height:"250px",border:"none",borderRadius: "20px",background:'#22acf47a',fontSize:'16px'}}
                >
               
                  <BsPlusCircle/>
                  <br/> Creer un nouveau projet
               
               </button>
                  {u.map((i,j,k)=>
              <div 
              className="btnStyle"
              style={{
                width: '254px',
                height: '250px',
                border: 'none',
                borderRadius: '20px',
                margin: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                boxShadow:' 0px 0px 0.5px 1px #4544444d',
                
              }}
              >
                  <TiDelete onClick={()=>onDelete(i._id)} size={25} style={{position:'relative',top: '-94px',right: '-104px',color: 'red',cursor:'pointer'}}/>
                <button  style={{border:'none',background:'transparent',fontSize:'16px'}}
                  onClick={()=>{
                    user.user.estTeste===false?navigate('/test'):
                    i.verrou==false?
                    navigate(`/projet/${i._id}`):
                    navigate(`/projet/${i._id}/verouiller`)
                  }} 
                  >
                  {i.verrou==true?<BsFillLockFill/>:<BsFillUnlockFill/>}
                  <br/>
                  {i.nom_projet}
                  <br/>
                  <i style={{fontSize:'13px'}}>{i.slogan} </i>
                  </button>
                   </div>
                    
                    )}
                    
                          
                   </div>
                 )}

                       </div>
               }     
            </div>  
    </div>
  )
}

export default Projet