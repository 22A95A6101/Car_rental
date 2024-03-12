import React from 'react'
import './UserCars.css'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const UserInfo = () => {
  return (
    <div className='pad'>
      <div className='containerFluid'>
        <h1>Drive what You Want</h1>
        <div className='row'>
          <div className='col-md-3'>
            <div id='sss'>
              <Link to='/Bloomberg'>
              <div className="card" style={{background:"#9acef3"}}>
                <div className="image"><span className="text"><img src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHTTIXsB6Co0/v0/1200x-1.jpg' /></span></div>
                <span className="title">Bloomberg</span>
                <span className="price">$100</span>
              </div>
              </Link>
            </div>
          </div>
          <div className='col-md-3'>
            <div id='sss'>
              <Link to="/Autocar">
              <div className="card" style={{background:"#9acef3"}}>
                <div className="image"><span className="text"><img src='https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/mclaren-720s_0.jpg?itok=wZbSZ3FZ' /></span></div>
                <span className="title">Autocar</span>
                <span className="price">$100</span>
              </div>
              </Link>
            </div>
          </div>
          <div className='col-md-3'>
            <div id='sss'>
             <Link to="/Hyundaivertina">
             <div className="card" style={{background:"#9acef3"}}>
                <div className="image"><span className="text"><img src='https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Verna/8703/1679389180298/front-left-side-47.jpg' /></span></div>
                <span className="title">Hyundai Verna</span>
                <span className="price">$100</span>
              </div></Link>
            </div>
          </div>
          <div className='col-md-3'>
            <div id='sss'>
              <Link to='/Hyundaicreta'>
              <div className="card" style={{background:"#9acef3"}}>
                <div className="image"><span className="text"><img src='https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/7695/1651645683867/front-left-side-47.jpg?imwidth=420&impolicy=resize' /></span></div>
                <span className="title">Hyundai Creta</span>
                <span className="price">$100</span>
              </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className='row'>
            <div className='col-md-3'>
              <div id='sss'>
                <Link to='/Hyundai New Kona'>
                <div className="card" style={{background:"#9acef3"}}>
                  <div className="image"><span className="text"><img src='https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/2022-Hyundai-Creta-Header-2.jpg' /></span></div>
                  <span className="title">Hyundai New Kona</span>
                  <span className="price">$100</span>
                </div>
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div id='sss'>
                <Link to='/Mercedescar'>
                <div className="card" style={{background:"#9acef3"}}>
                  <div className="image"><span className="text"><img src='https://wallpaperaccess.com/full/3149102.jpg' /></span></div>
                  <span className="title">Mercedes Car</span>
                  <span className="price">$100</span>
                </div>
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div id='sss'>
                <Link to='/Audi'>
                <div className="card" style={{background:"#9acef3"}}>
                  <div className="image"><span className="text"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_uQ9OwStPbAJ9URXIAoOnOUxJ3y7F8ZMhw&usqp=CAU' /></span></div>
                  <span className="title">Audi</span>
                  <span className="price">$100</span>
                </div>
                </Link>
              </div>
            </div>
            <div className='col-md-3'>
              <div id='sss'>
                <Link to='/Ferrari'>
                <div className="card" style={{background:"#9acef3"}}>
                  <div className="image"><span className="text"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStm5sdFcHit6YrX9cXnZ1LagpoCuxKAd8erA&usqp=CAU' /></span></div>
                  <span className="title">Ferrari</span>
                  <span className="price">$100</span>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      



    </div>
    
  )
}

export default UserInfo
