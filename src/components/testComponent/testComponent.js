import React, { useEffect, useState } from 'react'
import {FaRegThumbsDown,FaRegThumbsUp, FaThumbsDown, FaThumbsUp } from 'react-icons/fa'
import './testComponent.css'
const TestComponent =(props)=>{
  const [reponduOne,setReponduOne]=useState(false)
  const [reponduTwo,setReponduTwo]=useState(false)
  const [reponduThree,setReponduThree]=useState(false)
  const [reponduFour,setReponduFour]=useState(false)
  const [reponduFive,setReponduFive]=useState(false)
  const [color,setColor]=useState('#d1cfcf')
  console.log(props.index)
  const getReponduOne=()=>{
     if(reponduOne==false){
    setColor('#12ea12')
    setReponduOne(true)
    setReponduTwo(false)
    setReponduThree(false)
    setReponduFour(false)
    setReponduFive(false)
   }
  
  }

  const getReponduTwo=()=>{
     if(reponduTwo==false){
    setColor('#12ea12')
     setReponduOne(false)
     setReponduTwo(true)
     setReponduThree(false)
     setReponduFour(false)
     setReponduFive(false)
    }
   
   }

   const getReponduThree=()=>{
     if(reponduThree==false){
     setColor('#12ea12')
     setReponduOne(false)
     setReponduTwo(false)
     setReponduThree(true)
     setReponduFour(false)
     setReponduFive(false)
    }
   
   } 

   const getReponduFour=()=>{
     if(reponduFour==false){
     setColor('#12ea12')
     setReponduOne(false)
     setReponduTwo(false)
     setReponduThree(false)
     setReponduFour(true)
     setReponduFive(false)
    }
   
   } 

   const getReponduFive=()=>{
     if(reponduFive==false){
      setColor('#12ea12')
     setReponduOne(false)
     setReponduTwo(false)
     setReponduThree(false)
     setReponduFour(false)
     setReponduFive(true)
    }
   
  }

  
    return(
        <div className="laquestion">
  <div className="numero">
  <svg version="1.1" id="Calque_1" width="100px" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 200 200"  xmlSpace="preserve">

<g>
	<polygon style={{fill:color}} points="0,0 200,0 0,200 	"/>
	<text transform="translate(25,90)" style={{fill:color,fontFamily:'MyriadPro-Regular',fontSize:"72px"}}>{props.questionnaire.id}</text>
</g>
</svg>
  </div>
         <div className="ques">  
            <div className="question">
             <p className="quiz">{props.questionnaire.q}</p>
           </div> 
           {<div className="reponses">
            <div onClick={()=>getReponduOne()}>{reponduOne===false?<div><FaRegThumbsUp /><FaRegThumbsUp /></div>:<div><FaThumbsUp color="blue"/><FaThumbsUp color="blue" /></div>}<p className="reponse">Totalement d’accord </p></div>
           <div onClick={()=>getReponduTwo()}>{reponduTwo===false?<div><FaRegThumbsUp /></div>:<div><FaThumbsUp color="blue"/></div>} <p className="reponse">D’accord</p></div>
            <div onClick={()=>getReponduThree()}>{reponduThree===false?<div><FaRegThumbsUp /></div>:<div><FaThumbsUp color="blue"/></div>}<p className="reponse">Un peu d’accord</p></div>
            <div onClick={()=>getReponduFour()}>{reponduFour===false?<div><FaRegThumbsDown /></div>:<div><FaThumbsDown color="blue"/></div>}<p className="reponse"> En desaccord</p></div>
            <div onClick={()=>getReponduFive()}>{reponduFive===false?<div><FaRegThumbsDown /><FaRegThumbsDown /></div>:<div><FaThumbsDown color="blue"/><FaThumbsDown color="blue"/></div>}<p className="reponse">Totalement en desaccord</p></div>
           </div>}
         </div>
         </div>
    )
}
export default TestComponent


