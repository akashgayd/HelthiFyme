import axios from "axios";
import {useEffect, useState } from "react";
import './chatAi.css';
import Navbar from "../nav/nav";

const ChatAi = ()=>{


const [values,setvalues] = useState();

const[quition,setquition] = useState('');

const[asn, setAns] = useState({

    lazyLoad:""
})

const GenrateResopnse = async(e)=>{

    setAns({...asn,lazyLoad:"Loding...."})

    e.preventDefault();
    try {
        


        
const GenrateAns = await axios ({
    url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBd5z2SDdreWz7NTT6kznI90GJUF2E_Ob4",
        method:"Post",
    
        data:{
            contents: [{
                parts:[{text:values}]
                }]
        }
    
    
        
    })
    
    // console.log(GenrateAns['data']['candidates'][0]['content']['parts'][0]['text']);
    
    setquition(GenrateAns['data']['candidates'][0]['content']['parts'][0]['text'])
    setAns({...asn,lazyLoad:""})
    setvalues('')
    
    }
    catch(error){

        console.log(error)
    }
    
    
    
    


    } 





    return(
        <>
        <br /><br />

<Navbar/>

<br /><br /><br />




        <div className="main-coach-input1">
        
    


        <div className="input-sarch">



<div className="ai-coach-last">

<img src="imeges/Ria-Button.png"/>
<p>Your Ai Coach</p>



</div>

<div className="ans">

    <h4>{asn.lazyLoad}</h4>
<p>{quition.replaceAll('*', ' ')}</p>

</div>




<form className="input-last-search" onSubmit={GenrateResopnse}>
 <input type="text" placeholder="Ask anything....." value={values} onChange={(e)=> setvalues(e.target.value)}/>
  <button type="submit"><img src="imeges/sendimg.png" alt="" /></button>
  </form>




        </div>
        </div>

        </>
    )
}
export default ChatAi;