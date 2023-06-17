import { useEffect, useState } from "react"
import Entete from "../../components/Entete/entete"
import ProfilCompoment from "../../components/profil/profil"
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { RiWhatsappFill } from "react-icons/ri"
import photoLo from '../../Assets/BGSVG/paulPhoto.jpg'
import './profil.css' 
import { useDispatch, useSelector } from "react-redux"
import { authActions } from '../../reducer/store/store_index'
import { useNavigate, useParams } from "react-router-dom"
import { fetchWrapper } from "../../reducer/helpers/helpers"
import BtnRetourComponent from "../../components/btnRetourComponent"
import Skeleton from "react-loading-skeleton"
import arc from "../../Assets/BGSVG/Polygone1.svg"
import Vert from "../../Assets/BGSVG/PolygoneV.png"
import Poli from "../../Assets/BGSVG/Polygone3.png"
import Profiltest from "../text/profilTest"
import Backdrop from "../../components/Backdrop/Backdrop"
import { FcGraduationCap } from "react-icons/fc"

export default function Profil (){
    const [choi, setChoi]= useState(false)
    const [user, setUser]= useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate()
  const {id} = useParams()
    const [le_changement, setLe_changement]= useState("PROFIL")
    const authUser= useSelector(x => x.auth)
    const onTeste=(a,b)=>{
      
      setChoi(true)
    }
    const onSubmit=(e)=> {
      e.preventDefault()
      return dispatch(authActions.logout());
  }

  const getUtilisateurByid= async() =>{
    const response = await fetchWrapper.get( `http://localhost:8080/api/users/voir/${id}`);
    console.log(response)
    setUser(response)
   
}


useEffect(() => {
   getUtilisateurByid()
    },[])

       
    return(
        <div >
          {choi==true&&<div>
    <Backdrop/>
    {user.estTeste==false?<div
       style={{
        position: "absolute",
        zIndex: "2",
        width: "474px",
        background: "white",
        padding: "23px",
        left: "350px",
        top:"180px",
        borderRadius: "32px",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        justifyItems:"center",
        alignItems:"center",
     }}
    > <div>
    <FcGraduationCap size={35} style={{margin:'3px'}}/>
    <FcGraduationCap size={35} style={{margin:'3px'}}/>
    <FcGraduationCap size={35} style={{margin:'3px'}}/>
   </div> <p style={{fontSize:"15px",margin:"5px",textAlign:'center',width:'355px'}}>l'utilisateur n'a pas encore passé le test </p><button onClick={()=>setChoi(false)} style={{cursor:'pointer' ,width:'150px',height:'35px' ,borderRadius:'25px', border:'none', background:'green'}}>OK</button>
   </div>:
    <Profiltest note={user.test.note} type={user.test.type} desc={""} retourne={()=>setChoi(false)}/>}
    </div>}
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
        <BtnRetourComponent libelle={'Retour'} navigateur={()=>navigate(-1)}/>
        <div className="corps">
          <div style={{position: 'relative',top: '52px'}}>
        <img src={photoLo}
        style={{borderRadius:"50%",width:"90px",height:"90px", border: "1px solid white",margin: "4px"}}/> 
        </div>
        <div className="compte">
        <div className="infoGeneral">
        {user==null?<Skeleton style={{background:'gray',width: '80px',border: 'none',margin: '10px'}}/>:<p style={{color: 'gray',fontSize:"15px"}}>{user.nom_utilisateur} </p>} 
        {user==null?<Skeleton style={{background:'gray',width: '80px',border: 'none',margin: '10px'}}/>:<p>{user.nom}  {user.prenom}</p>}
        {user==null?<Skeleton style={{background:'gray',width: '80px',border: 'none',margin: '10px'}}/>: <p style={{color: 'gray',fontSize:"15px",textTransform: 'capitalize'}}>{user.typeUser}</p>}
       </div>
       <div style={{display: 'contents'}}>
       {user==null?<Skeleton style={{background:'gray',width: '80px',border: 'none',margin: '10px'}}/>:user._id==authUser.user.user._id?<button  onClick={(e)=>onSubmit(e)} style={{border: '1px solid red',borderRadius: '20px',height:' 40px',cursor:'pointer'}}>Se deconnecter</button>:<button  onClick={(e)=>onSubmit(e)} style={{border: '1px solid blue',borderRadius: '20px',height:' 40px',cursor:'pointer'}}>Supprimer le compte</button>}
       </div>
           <h3>Compte</h3>
           <div className="contenu">
               {user==null?<Skeleton style={{background:'gray',width: '80px',border: 'none',margin: '10px'}}/>:user._id==authUser.user.user._id&&<button style={{border:'none',fontSize:'14px',cursor:'pointer',margin: '4px'}} onClick={()=>navigate('/MotdepasseChange')}>Changer son mot de passe</button>}
               {user==null?<Skeleton style={{background:'gray',width: '80px',border: 'none',margin: '10px'}}/>:authUser.user.user.typeUser=='admin'&&<button style={{border:'none',fontSize:'14px',cursor:'pointer',margin: '4px'}} onClick={()=>onTeste()}>Voir le resultat du test</button>}
               <button style={{border:'none',fontSize:'14px',cursor:'pointer',margin: '4px'}} onClick={()=>navigate(`/modifie_informations/${user._id}`)}>Modifier les informations génerales</button>
           </div>
        </div>

        
        
               <div className="partage">
                   <h3>Partager sur les reseaux sociaux</h3>
                   <div className='stat_profil'>
                    <RiWhatsappFill size={40} color='green'/>
                     <FaFacebook size={40} color='blue' />
                       <FaLinkedin size={40} color='red' /> 

                   </div>
               </div>
          </div>
          </div>)
}