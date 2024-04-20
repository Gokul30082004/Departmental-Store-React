import React from 'react'
import Header from './Header'
import './prodstyle.css'
function Creaemp() {
    return (
        <div><Header />
            <div id="main-area">
                <div id="sec1">
                    <div style={{ marginTop: "10px" }}>
                        <img src="logo_dark.png" alt='' id="logo" />
                        <div id="logo-txt">
                            <h1>Departmental store</h1>
                            <h1 style={{ color: "#4318FF" }}>Create employee</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tassign">
                <div className='assign-ticket'>
                    <center>
                        <h3 style={{ display: "block", fontWeight: "400", fontSize: "30px", lineHeight: "2", color: "#A3AED0" }}>Create Employee Id</h3>
                    </center>
                    <form className='leave-form' id='leave-form'>
                        <label style={{ display: "block" }}>Employee Name</label>
                        <input placeholder='Employee name' type='text' name='teid' className='leave-reason' id='leave-reason' required /><br />
                        <label>Salary</label><br />
                        <input type='text' name='ttname' className='leave-reason' id='leave-reason' placeholder='Salary' required /><br />
                        <label style={{ display: "block" }}>Account Number</label>
                        <input placeholder='Account no' type='text' name='tedis' className='leave-reason' id='leave-reason' required /><br />
                        <label style={{ display: "block" }}>Address</label>
                        <input placeholder='Address' type='text' name='tedis' className='leave-reason' id='leave-reason' required /><br />
                        <label style={{ display: "block" }} > Phone Number</label>
                        <input placeholder='Phone no' type='tel' name='tedis' className='leave-reason' id='leave-reason' required />
                        <button type='button' form='leave-form' value='Apply' className='apply-leave-btn'>Create</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Creaemp