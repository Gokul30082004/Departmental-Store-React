import React from 'react'
import Header from './Header'
import './prodstyle.css'
function Delemp() {
    return (
        <div><Header />
            <div id="main-area">
                <div id="sec1">
                    <div style={{ marginTop: "10px" }}>
                        <img src="logo_dark.png" alt='' id="logo" />
                        <div id="logo-txt">
                            <h1>Departmental store</h1>
                            <h1 style={{ color: "#4318FF" }}>Detete Employee</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tassign">
                <div class='assign-ticket'>
                    <center>
                        <h3 style={{ display: "block", fontWeight: "400", fontSize: "30px", lineHeight: "2", color: "#A3AED0" }}>Delete Employee</h3>
                    </center>
                    <form class='leave-form' id='leave-form'>
                        <label style={{ display: "block" }}>Employee Name</label>
                        <input placeholder='Employee name' type='text' name='teid' class='leave-reason' id='leave-reason' required /><br />
                        <button type='button' form='leave-form' value='Apply' class='apply-leave-btn'>Delete</button>
                    </form>
                </div></div>
        </div>
    )
}

export default Delemp