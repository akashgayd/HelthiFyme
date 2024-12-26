import React from 'react'
import './getapp.css'
import Logo from '../../assets/Logo.png'
import Apple from '../../assets/appstore_ic.svg'
import Playstore from '../../assets/playstore_ic.svg'
import GetappFirst from './getapp-first/GetappFirst'
import GetappSecond from './getapp-second/GetappSecond'
import GetappThird from './getapp-third/GetappThird'
import { Link } from 'react-router-dom'
import GetappFourth from './getapp-fourth/GetappFourth'
import GetappFifth from './getapp-fifth/GetappFifth';
import Footer from '../footer/footer'

const GetApp = () => {
  return (
    <div className='app-container'>
        <header className="app-header">
            <div className="app-header-part">
                <Link to="/"><img src={Logo} alt="" className="logo" /></Link>
                <button className="store">
                    <img src={Apple} alt="" className="store-icon" />
                   <a href="https://apps.apple.com/in/app/healthifyme-weight-loss-plan/id943712366"> <span className="store-name">App Store</span></a>
                </button>
                
                <button className="store">
                    <img src={Playstore} alt="" className="store-icon" />
                   <a href="https://www.healthifyme.com/app/?shortlink=navbar&c=Website_NavBar&pid=HMe_Website&af_xp=custom&source_caller=ui"><span className="store-name">Play Store</span></a> 
                </button>
            </div>
        </header>
        <GetappFirst/>
        <GetappSecond/>
        <GetappThird/>
        <GetappFourth/>
        <GetappFifth/>
        <Footer/>
    </div>
  )
}

export default GetApp