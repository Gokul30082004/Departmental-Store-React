import React, { useState} from 'react'
import './home.css'
import { IoEye } from "react-icons/io5";
import Dashboard from "./Dashboard.jsx"
import { useNavigate } from 'react-router-dom';
function Home() {
    const [inputtype, setinputtype] = useState('password')
    function show_hide() {
        setinputtype(inputtype === 'text' ? 'password' : 'text')
    }
    const defaultdata = {
        uemail: 'asdads',
        upasskey: '-1',
    }
    const [logindet, setlogindet] = useState(defaultdata)
    const handlechange = (e) => {
        setlogindet({
            ...logindet,
            [e.target.name]: e.target.value,
        });
        // console.log(e.target.value)
    }
    const [submitted,setsubmitted]=useState(false);
    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(`${logindet.uemail}`);
        setsubmitted(true)
    }
    const navigate=useNavigate()
    return (
        <div>
            {!submitted?(<div id='login-box'>
                <div id='form-box'>
                    <form onSubmit={handlesubmit}>
                        <h1 className='form-box-h1'>Login to continue</h1>
                        <input type='email' name='uemail' onChange={handlechange} className='uemail' placeholder='Enter your email' required='' /><br /><br />
                        <input type={inputtype} id='upasskey' name='upasskey' onChange={handlechange} className='upasskey' placeholder='Enter your password' required='' />
                        <button className='eyebtn' id='eyebtn' type='button' onClick={show_hide}><IoEye /></button>
                        <br /><br />
                        <button onClick={()=>{
                            navigate("/dashboard")
                        }} className='forgot-pass'>Forgot password?</button><br /><br />
                        <input type='submit' name='submit' className='login-btn' value='Login' />
                    </form>
                </div>
                <div id='image-box'></div>
            </div>):(<Dashboard/>)}
        </div >
    )
}
export default Home