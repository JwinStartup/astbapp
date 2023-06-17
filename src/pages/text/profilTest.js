import react, { useEffect } from 'react'
import { FcGraduationCap } from 'react-icons/fc'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../../reducer/store/store_index'

const Profiltest=({note,type,desc,retourne})=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authUser = useSelector(x => x.auth)

  const onRetour=  ()=>{
 //   const userr ={user:user,token:authUser.user.token,tokenExpiration:authUser.user.tokenExpiration}
  //  dispatch(authActions.modifierUser(userr))
  }
    return(
       <div 
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
       >     <div>
        <FcGraduationCap size={35} style={{margin:'3px'}}/>
        <FcGraduationCap size={35} style={{margin:'3px'}}/>
        <FcGraduationCap size={35} style={{margin:'3px'}}/>
       </div>
            <div> Note :  <span style={{color:'red',fontSize:'20px'}}>{note}/25</span> </div>
            <div> <h3 style={{margin:'5px'}}> {type} </h3> </div>
            <div><p style={{fontSize:"15px",margin:"5px",textAlign:'center',width:'355px'}}>{desc}</p></div>
       
             <button onClick={retourne} style={{cursor:'pointer' ,width:'150px',height:'35px' ,borderRadius:'25px', border:'none', background:'green'}}>OK</button>
        </div>
    )
}
export default Profiltest