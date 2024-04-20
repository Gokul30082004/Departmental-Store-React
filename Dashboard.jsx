import React from 'react'
import Header from './Header'
import './Dashboard.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
function Dashboard() {
    // const act_state={dashboard:'side-menu-btn active',product:'side-menu-btn',employee:'side-menu-btn',calculate:'side-menu-btn',edit:'side-menu-btn'}
    return (
    <div>
        {<Header/>}
        <div id='main-area'>
  <div id='sec1'>
    <div style={{marginTop: "10px"}}>
      <img src='img.png' id='logo' alt=''/>
      <div id='logo-txt'>
        <h1>Departmental Store</h1>
        <h1 style={{color: "#4318FF"}}>Dashboard</h1>
      </div>
    </div>
    <div className='today-attendance' style={{marginTop: "10px",marginLeft: "10px"}}>
      <h3>Checked in at 03:35:23 pm for today</h3>
      <div style={{display:"grid",gridTemplateColumns: "repeat(2, 50%)",marginTop: "15px"}}>
        <div>
          <form action='check-in.php' method='POST'>
            <input type='hidden' name='sid' value='1'/>
            <input type='submit' name='Check in' className='mark-att-dis' value='Check in' disabled=''/>
          </form>
        </div>
        <div>
          <form action='check-out.php' method='POST'>
            <input type='hidden' name='sid' value='1'/>
            <input type='submit' name='Check out' className='mark-att' value='Check out'/>
          </form>
        </div>
      </div>
    </div>
    <div className='wrapper'>
      <header>
        <p className='current-date'>July 2023</p>
        <div className='icons'>
          <span id='prev' className='material-symbols-rounded'><FaArrowLeft /></span>
          <span id='next' className='material-symbols-rounded'><FaArrowRight /></span>
        </div>
      </header>
      <div className='calendar'>
        <ul className='weeks'>
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className='days'>
          <li className='inactive'>25</li>
          <li className='inactive'>26</li>
          <li className='inactive'>27</li>
          <li className='inactive'>28</li>
          <li className='inactive'>29</li>
          <li className='inactive'>30</li>
          <li className=''>1</li>
          <li className=''>2</li>
          <li className=''>3</li>
          <li className=''>4</li>
          <li className=''>5</li>
          <li className=''>6</li>
          <li className=''>7</li>
          <li className=''>8</li>
          <li className=''>9</li>
          <li className=''>10</li>
          <li className=''>11</li>
          <li className=''>12</li>
          <li className=''>13</li>
          <li className=''>14</li>
          <li className=''>15</li>
          <li className='active'>16</li>
          <li className=''>17</li>
          <li className=''>18</li>
          <li className=''>19</li>
          <li className=''>20</li>
          <li className=''>21</li>
          <li className=''>22</li>
          <li className=''>23</li>
          <li className=''>24</li>
          <li className=''>25</li>
          <li className=''>26</li>
          <li className=''>27</li>
          <li className=''>28</li>
          <li className=''>29</li>
          <li className=''>30</li>
          <li className=''>31</li>
          <li className='inactive'>1</li>
          <li className='inactive'>2</li>
          <li className='inactive'>3</li>
          <li className='inactive'>4</li>
          <li className='inactive'>5</li>
        </ul>
      </div>
    </div>
  </div >
  <div id='sec2'>
    <div id='attendance-summary'>
      <div className='total-attendance' style={{marginTop: "28px",arginLeft: "10px"}}>
        <div style={{float:"left"}}>
          <div style={{display:"grid",gridTemplateColumns: "repeat(2, 50%)"}}>
            <div
              style={{backgroundColor:"#190793",color: "#A3AED0",padding: "10px",borderRadius: "30px",textAlign: "center",fontSize: "12px",width: "20px"}}>
              <i className='bi bi-calendar-fill'></i>
            </div>
            <div>
              <h3 style={{paddingTop: "12px"}}>Total</h3>
            </div>
          </div>
          <p>16 Days</p>
        </div>
      </div>
      <div>
        <div className='total-present' style={{marginTop: "28px"}}>
          <div style={{float:"left"}}>
            <div style={{display:"grid",gridTemplateColumns: "repeat(2, 50%)"}}>
              <div
                style={{backgroundColor: "#E6FAF5",color: "#05CD99",padding: "10px",borderRadius: "30px",textAlign: "center",fontSize: "12px",width: "20px"}}>
                <i className='bi bi-calendar2-check-fill'></i>
              </div>
              <div>
                <h3>Present</h3>
              </div>
            </div>
            <p>9 Days</p>
          </div>
        </div>
      </div>
      <div>
        <div className='total-attendance' style={{marginTop: "28px",marginLeft: "10px"}}>
          <div style={{float:"left"}}>
            <div style={{display:"grid",gridTemplateColumns: "repeat(2, 50%)"}}>
              <div
                style={{backgroundColor: "#F2B0AC",color: "#EE5D50",padding: "10px",borderRadius: "30px",textAlign: "center",fontSize: "12px",width: "20px",height: "20px"}}>
                <i className='bi bi-calendar-x-fill'></i>
              </div>
              <div>
                <h3 style={{paddingLeft: "-10px"}}>Absent/<br/>Leave</h3>
              </div>
            </div>
            <p>7 Days</p>
          </div>
        </div>
      </div>
    </div>
    <div id='leave-box'>
      <h3 style={{float: "left"}}>Yesterday Income</h3>
      <br/><br/><br/>
      <h4>Total income:</h4>
      <span style={{marginLeft:"15%"}}>50000</span>
      <h4>Employee Salary:</h4>
      <span style={{marginLeft:"15%"}}>5000</span>
      <h4>Product cost:</h4>
      <span style={{marginLeft:"15%"}}>35000</span>
      <h4>Total cost spent:</h4>
      <span >45000</span>
      <h4>Total income:</h4>
      <span>5000</span>
    </div>
  </div>
  <div id='sec3'>
    <div>

      <div id='logo-txt'>
      </div>
    </div>
    <div id='courses-summary' style={{marginTop:"70px"}}>
      <div className='total-tickets'>
        <h3>Total Products</h3>
        <p>1</p>
      </div>
      <div className='inprogress-courses'>
        <h3>In Sortage</h3>
        <p >1</p>
        <i className='bi bi-bar-chart-fill' id='ip-icon'></i>
      </div>
    </div>
    <div id='instructors-list'>
      <h3 >Employee Details</h3>
      <a href='all-courses.php'>View more    <FaArrowCircleRight /></a>
      <table className='instructors-list-table'>
        <tbody>
          <tr>
            <td>
              <div className='instructors-list-logo'>
                <img src='img.png' alt=''/>
              </div>
            </td>
            <td className='instructors-list-title'>
              <h4>Employee name</h4>
              <p>sales</p>
            </td>
            <td className='instructors-list-dept'>
              <p>001</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div >
    </div >
  )
}

export default Dashboard