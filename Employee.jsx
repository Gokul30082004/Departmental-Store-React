import React from 'react'
import Header from './Header'
import './Employee.css'
import { useNavigate } from 'react-router-dom'
function Employee() {
    // const act_state = { dashboard: 'side-menu-btn', product: 'side-menu-btn', employee: 'side-menu-btn active', calculate: 'side-menu-btn', edit: 'side-menu-btn' }
    // const location = useLocation()
    // console.log(location.pathname)
    const navigate = useNavigate()

    return (
        <div>
            <Header />
            <div id="main-area">
                <div id="sec1">
                    <div style={{ marginTop: "10px" }}>
                        <img src="logo_dark.png" alt='' id="logo" />
                        <div id="logo-txt">
                            <h1>Demartmental shop</h1>
                            <h1 style={{ color: "#4318FF" }}>Employee details</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id='all-courses-main-area'>
                <div class="buttons">
                    <input type='hidden' style={{ float: "left", borderRadius: "6px", padding: "2px", marginTop: "20px" }}
                        placeholder='Search here' id='search-btn' name='search_btn' />
                    <button id="cticket" onClick={() => {
                        navigate("/deleteemployee")
                    }} style={{ textDecoration: "none", padding: "10px" }}>Delete Employee</button>
                    <button id="cticket" onClick={() => {
                        navigate("/createemployee")
                    }} style={{ textDecoration: "none", padding: "10px" }}>Create Employee</button>
                    <button id="table-view" style={{ padding: "10px" }}>Table view</button>
                </div>

                <div style={{ padding: "20px", marginTop: "2%", marginLeft: "3%", backgroundColor: "white", borderRadius: "40px", width: "90%", }}>
                    <table class="table-data" id="table-data">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Joined On</th>
                                <th>Salary</th>
                                <th>Account no</th>
                                <th>Address</th>
                                <th>Phone no</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td><button onClick={() => {
                                    navigate("/editprofile")
                                }} style={{ background: "transparent", border: "transparent" }} class='table-hover'>Employee name</button></td>
                                <td>03/03/2022</td>
                                <td>10000</td>
                                <td>4328544631934</td>
                                <td>9/165 namakkal</td>
                                <td>9876543210</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="card" style={{ marginTop: "-40px" }}>
                    <button class='course-card'>
                        <p class='course-card-progress' style={{ backgroundColor: "red" }}>001</p>
                        <h1 class='course-card-title' style={{ marginTop: "15px" }}>Employee name</h1>
                        <div style={{ float: "left", marginTop: "0px", width: "70%" }}>
                            <p class='course-card-details'><i class='bi bi-calendar2'></i>Joined at 03/03/2020</p>
                            <p class='course-card-details'><i class='bi bi-bar-chart-fill'></i>Salary: 10000</p>
                            <p class='course-card-details'><i class='bi bi-tv-fill'></i>Employee id: 001</p>
                            <p class='course-card-details'><i class='bi bi-arrow-right-circle-fill'></i> Address</p>
                        </div>
                        <div style={{ float: "right", marginTop: "0px", width: "60px" }}>
                        </div>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Employee