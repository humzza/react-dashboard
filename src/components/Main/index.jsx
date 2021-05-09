import React from 'react'
import profile from '../.././images/profile.jpg'
import logo2 from '../.././images/pro.JPG'

import './style.css'

const Main = () => {

    const toggleMenu = () => {
        let toggle = document.querySelector('.toggle');
        toggle.classList.toggle('active');
        let navigation = document.querySelector('.navigation');
        navigation.classList.toggle('active');
        let main = document.querySelector('.main');
        main.classList.toggle('active');
    }

    return (
        <div className = "main">
            <div className="topbar">
                <div className="toggle" onClick = {()=>toggleMenu()} ></div>
                <div className="search">
                    <label>
                        <input type="text" placeholder="Search here" />
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </label>
                </div>
                <div className="user">
                        <img src={profile} alt="" />
                 </div>
            </div>


            <div className="card-box">
                <div className="card">
                    <div>
                        <div className="numbers">1,110</div>
                        <div className="card-name">Daily Views</div>
                    </div>
                    <div className="icon-box"><i class="fa fa-eye" aria-hidden="true"></i></div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="card-name">Sales</div>
                    </div>
                    <div className="icon-box"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">200</div>
                        <div className="card-name">Comments</div>
                    </div>
                    <div className="icon-box"><i class="fa fa-comment" aria-hidden="true"></i></div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">PKR20000</div>
                        <div className="card-name">Earniings</div>
                    </div>
                    <div className="icon-box"><i class="fa fa-usd" aria-hidden="true"></i></div>
                </div>
            </div>

            <div className="details">
                <div className="recent-orders">
                    <div className="card-header">
                        <h2>Recent Orders</h2>
                        <a href="#" className ="btn">View All</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payement</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mobiles</td>
                                <td>$1,200</td>
                                <td>Paid</td>
                                <td><span className = "status delivered">Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Accessories</td>
                                <td>$1,700</td>
                                <td>Due</td>
                                <td><span className = "status pending">Pending</span></td>
                            </tr>
                            <tr>
                                <td>Speakers</td>
                                <td>$2,200</td>
                                <td>Paid</td>
                                <td><span className = "status return">Return</span></td>
                            </tr>
                            <tr>
                                <td>HP Laptop</td>
                                <td>$4,2000</td>
                                <td>Paid</td>
                                <td><span className = "status inprogress">In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Mobiles</td>
                                <td>$1,200</td>
                                <td>Paid</td>
                                <td><span className = "status delivered">Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Accessories</td>
                                <td>$1,700</td>
                                <td>Due</td>
                                <td><span className = "status pending">Pending</span></td>
                            </tr>
                            <tr>
                                <td>Speakers</td>
                                <td>$2,200</td>
                                <td>Paid</td>
                                <td><span className = "status return">Return</span></td>
                            </tr>
                            <tr>
                                <td>HP Laptop</td>
                                <td>$4,2000</td>
                                <td>Paid</td>
                                <td><span className = "status inprogress">In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Smart Watch</td>
                                <td>$1,600</td>
                                <td>Paid</td>
                                <td><span className = "status delivered">Delivered</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="recent-customers">
                <div className="card-header">
                        <h2>Recent Customers</h2>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td width = "60px"><div className="img-box"><img src={logo2} alt="" /></div></td>
                                <td><h4>Hamza<br/><span>Pakistan</span></h4></td>
                            </tr>
                            <tr>
                                <td width = "60px"><div className="img-box"><img src={logo2} alt="" /></div></td>
                                <td><h4>Hamza<br/><span>Pakistan</span></h4></td>
                            </tr>
                            <tr>
                                <td width = "60px"><div className="img-box"><img src={logo2} alt="" /></div></td>
                                <td><h4>Hamza<br/><span>Pakistan</span></h4></td>
                            </tr>
                            <tr>
                                <td width = "60px"><div className="img-box"><img src={logo2} alt="" /></div></td>
                                <td><h4>Hamza<br/><span>Pakistan</span></h4></td>
                            </tr>
                            <tr>
                                <td width = "60px"><div className="img-box"><img src={logo2} alt="" /></div></td>
                                <td><h4>Hamza<br/><span>Pakistan</span></h4></td>
                            </tr>
                            <tr>
                                <td width = "60px"><div className="img-box"><img src={logo2} alt="" /></div></td>
                                <td><h4>Hamza<br/><span>Pakistan</span></h4></td>
                            </tr>
                            <tr>
                                <td width = "60px"><div className="img-box"><img src={logo2} alt="" /></div></td>
                                <td><h4>Hamza<br/><span>Pakistan</span></h4></td>
                            </tr>
                            <tr>
                                <td width = "60px"><div className="img-box"><img src={logo2} alt="" /></div></td>
                                <td><h4>Hamza<br/><span>Pakistan</span></h4></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Main
