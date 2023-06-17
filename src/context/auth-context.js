import react from 'react'
export default react.createContext({
    token:null,
    user:null,
    login:(token,user,tokenExpiration)=>{    },
    logout:()=>{},
})