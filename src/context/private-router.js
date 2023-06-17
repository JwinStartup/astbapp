import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate, Outlet, useLocation} from 'react-router-dom'
import { history } from '../reducer/helpers/helpers'   
const PrivateRouter =({children})=>{
const { user: authUser } = useSelector(x => x.auth);
   if(!authUser){
    return <Navigate to="/connexion" state={{from:history.location}} />
   }
  
return children
}
export default PrivateRouter