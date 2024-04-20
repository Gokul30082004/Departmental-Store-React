import React from 'react'
import Header from './Header'
import './Product.css'
import { useNavigate } from 'react-router-dom'
function Product() {
    const navigate = useNavigate()

        // Get references to the input field and table body
        const searchInput = document.getElementById('search-btn');
        const tableBody = document.getElementsByTagName('tbody')[0];

        // Add an event listener to the input field
        searchInput.addEventListener('input', function () {
            const searchText = searchInput.value.toLowerCase();

            // Get all rows in the table body
            const rows = tableBody.getElementsByTagName('tr');

            // Loop through each row and hide/show based on the search text
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                const cells = row.getElementsByTagName('td');
                let rowMatch = false;

                // Loop through all cells in the row
                for (let j = 0; j < cells.length; j++) {
                    const cell = cells[j];
                    const cellText = cell.textContent.toLowerCase();

                    // Check if the cell contains the search text
                    if (cellText.includes(searchText)) {
                        rowMatch = true;
                        break; // No need to check other cells once a match is found in this row
                    }
                }

                // Show or hide the row based on the search result
                if (rowMatch) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        });
    // const act_state={dashboard:'side-menu-btn',product:'side-menu-btn active',employee:'side-menu-btn',calculate:'side-menu-btn',edit:'side-menu-btn'}
    return (
        <div>
            <Header />
            <div id='main-area'>
                <div id='sec1'>
                    <div style={{ marginTop: "10px" }}>
                        <img src='logo_dark.png' alt='' id='logo' />
                        <div id='logo-txt'>
                            <h1>Departmental shop</h1>
                            <h1 style={{ color: "#4318FF" }}>Product details</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id='all-courses-main-area'>
                <div className='buttons'>
                    <input type='search' style={{ float: "left", bordeRadius: "6px", padding: "2px", marginTop: "20px" }}
                        placeholder='Search here' id='search-btn' name='search_btn' />
                    <button id='cticket' onClick={() => {
                        navigate("/deleteproduct")
                    }} style={{ textDecoration: "none", padding: "10px" }}>Delete product</button>
                    <button id='cticket' onClick={() => {
                        navigate("/createproduct")
                    }} style={{ textDecoration: "none", padding: "10px" }}>Create product</button>
                </div>

                <div style={{ padding: "20px", marginTop: "2%", marginLeft: "3%", backgroundColor: "white", borderRadius: "40px", width: "90%", }}>
                    <table className='table-data' id='table-data'>
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Name</th>
                                <th>Product amount</th>
                                <th>Profit</th>
                                <th>total products</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td><button onClick={() => {
                                    navigate("/editproduct")
                                }} style={{ background: "transparent", border: "transparent" }} className='table-hover' >Product
                                    name</button>
                                </td>
                                <td>10</td>
                                <td>2</td>
                                <td>50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Product