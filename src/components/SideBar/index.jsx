import React from 'react'
import './style.css'

const SideBar = () => {
    return (
        <div className = "navigation">
            <ul>
                <li>
                    <a href="#">
                    <span className = "icon"><i class="fa fa-codepen" aria-hidden="true"></i></span>
                    <span className = "title"><h1>CodeItrix</h1></span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className = "icon"><i class="fa fa-home" aria-hidden="true"></i></span>
                    <span className = "title">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className = "icon"><i class="fa fa-users" aria-hidden="true"></i></span>
                    <span className = "title">Customers</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className = "icon"><i class="fa fa-comment" aria-hidden="true"></i></span>
                    <span className = "title">Messages</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className = "icon"><i class="fa fa-question-circle" aria-hidden="true"></i></span>
                    <span className = "title">Help</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className = "icon"><i class="fa fa-cog" aria-hidden="true"></i></span>
                    <span className = "title">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className = "icon"><i class="fa fa-lock" aria-hidden="true"></i></span>
                    <span className = "title">Password</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <span className = "icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span>
                    <span className = "title">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar
