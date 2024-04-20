import React from 'react'
import Header from './Header'
import './prodstyle.css'
function Editmain() {
    return (
        <div><Header />
            <div id="main-area">
                <div id="sec1">
                    <div style={{ marginTop: "10px" }}>
                        <img src="logo_dark.png" alt='' id="logo" />
                        <div id="logo-txt">
                            <h1>Departmental store</h1>
                            <h1 style={{ color: "#4318FF" }}>Detete Product</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tassign">
                <div className='assign-ticket'>
                    <center>
                        <h3 style={{
                            display: "block", fontWeight: "400", fontSize: "30px", lineHeight: "2", color: "#A3AED0"
                        }}>Update Product quantity</h3>
                    </center>
                    <form className='leave-form' id='leave-form'>
                        <label style={{ display: "block" }}>Product Name</label>
                        <input placeholder='Product name' type='text' name='teid' className='leave-reason' id='input' required />
                        <ul className='list'>


                        </ul><br />
                        <label style={{
                            display: "block"}}>Quantity</label>
                                <input placeholder = 'Quantity' type = 'text' name = 'teid' className = 'leave-reason' id = 'leave-reason'
				required /><br />
			<button type='button' value='Apply' className='apply-leave-btn'>Update</button>
		</form>
                </div>
            </div>
            <br />
            <div id="tassign">
                <div className='assign-ticket'>
                    <center>
                        <h3 style={{
                            display: "block", fontWeight: "400", fontSize: "30px", lineHeight: "2", color: "#A3AED0"
                        }}>Update Employee Salary</h3>
                    </center>
                    <form className='leave-form' id='leave-form'>
                        <label style={{ display: "block" }}>Employee Name</label>
                        <input placeholder='Employee name' type='text' name='teid' className='leave-reason' id='myinp' required />
                        <ul className="mylist">


                        </ul><br />
                        <label style={{ display: "block" }}>Salary</label>
                        <input placeholder='Salary' type='text' name='teid' className='leave-reason' id='leave-reason'
                            required /><br />
                        <button type='button' value='Apply' className='apply-leave-btn'>Delete</button>
                    </form>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Editmain