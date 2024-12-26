import Navbar from "../nav/nav"
import PageOne from "../page1/page1";
import ProductVideo from "../product-video/productVideo";
import AiCouch from "../aiHelthCouch/aiCouch";
import SuggestFoodd from "../Suggest-food/suggest";
import WorkOut from "../workOutPlan/wordOut";
import Footer from "../footer/footer";
import './home.css';

const Home = ()=>{


    return(
        <>
        <Navbar/>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        <PageOne/>
        <div>
<ProductVideo/>
        </div>

        <div>
            <AiCouch/>
        </div>

        <div>
            <SuggestFoodd/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div><WorkOut/></div>


        <br />
       

        <div> <Footer></Footer></div>

        </>


    )
    
}
export default Home;