import React, { useState } from 'react'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi"
import { FaHome } from "react-icons/fa"; 
import { MdOutlineProductionQuantityLimits } from "react-icons/md"; 
import { IoPerson } from "react-icons/io5"; 
import { FaCalculator } from "react-icons/fa"; 
import { MdEditDocument } from "react-icons/md"; 
import { IoPowerSharp } from "react-icons/io5"; 
import { useNavigate } from 'react-router-dom';
function Header() {
  const [smarginleft,setsmarginleft]=useState('-200')
  const [mbackground,setmbackground]=useState('black')
  const [mcolor,setmcolor]=useState('white')
  const [triggering,settriggering]=useState('closed')
  const triggermenu=()=>{
    if(triggering==='closed')
    {
      setsmarginleft('0')
      setmcolor('white')
      setmbackground('black')
      settriggering('open')
    }
    else
    {
      setsmarginleft('-200')
      setmcolor('black')
      setmbackground('transparent')
      settriggering('closed')
    }
  }
  const navigate=useNavigate()
  return (
    <div>
      <button id="menu-trigger" style={{background:`${mbackground}`,color:`${mcolor}`}} onClick={triggermenu}><GiHamburgerMenu /></button>
      <div id='side-bar' style={{marginLeft :`${smarginleft}px`}}>
        <div id='side-menu'>
          <button onClick={()=>{
            navigate("/dashboard")
          }} className='side-menu-btn'>
            <span className='side-menu-btn-icon'><FaHome /></span>
            <span className='side-menu-btn-txt'>Dashboard</span>
          </button>
          
          <button onClick={()=>{
            navigate("/product")
          }} className='side-menu-btn'>
            <span className='side-menu-btn-icon'><MdOutlineProductionQuantityLimits /></span>
            <span className='side-menu-btn-txt'>Product Details</span>
          </button>
            <button onClick={()=>{
            navigate("/employee")
          }} className='side-menu-btn'>
            <span className='side-menu-btn-icon'><IoPerson /></span>
            <span className='side-menu-btn-txt'>Employee Details</span>
          </button>
          <button className='side-menu-btn'>
            <span className='side-menu-btn-icon'><FaCalculator /></span>
            <span className='side-menu-btn-txt'>Calculate</span>
          </button>
          <button onClick={()=>{
            navigate("/update")
          }} className='side-menu-btn'>
            <span className='side-menu-btn-icon'><MdEditDocument /></span>
            <span className='side-menu-btn-txt'>Edit products</span>
          </button>
          <button href='login.html' className='side-menu-btn'>
            <span className='side-menu-btn-icon'><IoPowerSharp /></span>
            <span className='side-menu-btn-txt'>Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header