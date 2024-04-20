import React from 'react'
import Header from './Header'
import './editstyle.css'
function Editprof() {
    return (
        <div><Header />
            <div id="main-area">
                <div id="sec1">
                    <div style={{ marginTop: "10px" }}>
                        <img src="logo_dark.png" alt='' id="logo" />
                        <div id="logo-txt">
                            <h1>Departmental store</h1>
                            <h1 style={{ color: "#4318FF" }}>Create Product</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="employee-details">
                <header style={{ display: "block", fontWeight: "400", fontSize: "30px", lineHeight: "2", color: "#A3AED0" }}>
                    <span id='yourp'>Employee profile</span>
                </header>
                <form>
                    <img src='' alt=''/><br />
                        <input type='button' className='edit-profile-button' style={{ float: "right", width: "60px", fontSize: "10px" }}
                            value='Edit Profile' id='edtprof'/><br /><br />
                            <table className='edit-profile-table'>
                                <tr>
                                    <td>
                                        <span>Name: </span>
                                    </td>
                                    <td>
                                        <input type='text' value='employee name' readonly name='ename' id='ename' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Department: </span>
                                    </td>
                                    <td>
                                        <input readonly name='edept' type='text' value='sales' id='edept' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Employee id: </span>
                                    </td>
                                    <td>
                                        <input type='text' value='001' readonly style={{ backgroundColor: "#D4FBFC", }} name='eid' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Phone No: </span>
                                    </td>
                                    <td>
                                        <input type='tel' readonly value='9876543210' name='ephone' id='ephone' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Account number: </span>
                                    </td>
                                    <td>
                                        <input readonly id='eemail' type='text' value='7654124963857' name='eemail' />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <span>Address: </span>
                                    </td>
                                    <td>
                                        <input readonly id='eaddress' type='text' value='9/165 namakkal' name='eaddress' />
                                    </td>
                                </tr>
                            </table>
                            <br />
                            <button type='submit' value='Save' className='edit-profile-button-save'>Save</button> <br /><br />
                        </form>
                    </div>
            </div >
            )
}

            export default Editprof