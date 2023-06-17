import { createSlice} from '@reduxjs/toolkit'

 export const utilisateurSlice= createSlice({
    name:'utilisateurs',
    initialState:{

    },
    reducers:{
        isTester:(state,action)=>{
            
            console.log(action)
        }
    }
 })
 export const {isTester} = utilisateurSlice.actions

 export default utilisateurSlice.reducer