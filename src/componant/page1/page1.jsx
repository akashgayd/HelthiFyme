import './page1.css';
import { useNavigate } from 'react-router-dom';

const PageOne = ()=>{

const navigate =  useNavigate();

    function Navigater(){

        navigate("/chaiAi")
        
    }


    return(
<>
<div className="pageOne-itm">





<div className="page1-1-main">

<div className='sparkal'>
    <img src="imeges/Sparkle.png" alt="" />
</div>


<div className='discription-page-1'>

<h1>
<span>Meet Healthify: </span>

Health Made Easy

With AI.
</h1>


<p>Improve your nutrition with HealthifySnap's advanced meal tracking & meet Ria, your personalized AI coach.</p>


</div>

<div className='discription-main-page1-button'>


<button className='btn-page1' >Try HelthiFySnap</button>
<button classNsame='btn2-page1' onClick={Navigater}>Talk To AI Coach </button>

</div>



</div>

<div className="food-img">
<img src="imeges/page1-1.png" alt="" />
</div>

</div>
        </>
    )
}
export default PageOne;