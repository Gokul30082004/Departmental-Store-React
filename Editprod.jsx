import React from 'react'
import Header from './Header'
import './editstyle.css'
function Editprod() {
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
                    <span id='yourp'>Product details</span>
                </header>
                <form>
                    <input type='button' className='edit-profile-button' style={{
                        marginTop: "0%"
                        ,float:"right",width:"60px",fontSize:"10px"}} value='Edit Profile' id='edtprof' />
                    <br /><br />
                    <table className='edit-profile-table'>
                        <tr>
                            <td>
                                <span>Product Name: </span>
                            </td>
                            <td>
                                <input type='text' value='product name' readonly name='ename' id='ename'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Product price: </span>
                            </td>
                            <td>
                                <input readonly name='edept' type='text' value='product price' id='edept'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Profit: </span>
                            </td>
                            <td>
                                <input readonly id='eemail' type='text' value='2' name='eemail'/>
                            </td>
                        </tr>
                    </table>
                    <br />
                    <button type='submit' value='Save' className='edit-profile-button-save'>Save</button>
                    <br /><br />
                </form>
            </div>
        </div >
    )
}

export default Editprod