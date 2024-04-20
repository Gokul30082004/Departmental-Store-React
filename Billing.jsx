import React from 'react'
import Header from './Header'
import './prodstyle.css'
import './billingstyle.css'
function Billing() {
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
                        <h3 style={{ display: "block", fontWeight: "400", fontSize: "30px", lineHeight: "2", color: "#A3AED0" }}>Billing</h3>
                    </center>
                    <form className='leave-form'>
                        <span>Product name:</span>
                        <input placeholder="Product name" type="text" id='input' />
                        <ul className='list' id='list'>


                        </ul>
                        <span>Quantity:</span>
                        <input type="text" id='myquantity' autocomplete='off' value="1" placeholder="quantity" />
                        <button>Add</button>
                    </form>
                    <table id='mylist' className='list-data' style={{ padding: "50px" }}>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </table>
                    <button>Bill</button>
                </div>
            </div>
        </div >
    )
}

export default Billing