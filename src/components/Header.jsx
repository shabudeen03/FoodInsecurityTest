import "../assets/stylesheets/header.css";
import logo from "../assets/images/logo.png";
import "../index.css";

import Navtab from "./links/Navtab.jsx";
import Authbtn from "./links/Authbtn.jsx";

function Header({ pageChangeHandler }) {
    return (<div className="header">
        <div className="site-header_wrapper">
            <span className="logo"><img id="logo" src={logo} onClick={() => pageChangeHandler(0)} /></span>
            <div className="inline_element nav_btns">
                <div className="inline_element top_nav">
                    {/* <div className="inline_element nav_link" id="tab_home">Dashboard</div> */}
                    {/* <div className="inline_element nav_link" id="tab_heatmap">Heatmap</div> */}
                    {/* <div className="inline_element nav_link" id="tab_recipes">Recipes</div> */}
                    {/* <div className="inline_element nav_link" id="tab_resources">Resources</div> */}
                    {/* <div className="inline_element nav_link" id="tab_contact">Contact</div> */}
                
                    <Navtab classes="inline_element nav_link" pageChangeHandler={pageChangeHandler} pageid={3} text="Dashboard" />
                    <Navtab classes="inline_element nav_link" pageChangeHandler={pageChangeHandler} pageid={4} text="Heatmap" />
                    <Navtab classes="inline_element nav_link" pageChangeHandler={pageChangeHandler} pageid={5} text="Recipes" />
                    <Navtab classes="inline_element nav_link" pageChangeHandler={pageChangeHandler} pageid={6} text="Resources" />
                    <Navtab classes="inline_element nav_link" pageChangeHandler={pageChangeHandler} pageid={7} text="Contact" />
                </div>
                <div className="inline_element">
                    <Authbtn classes="auth_btns" pageChangeHandler={pageChangeHandler} pageid={1} id="register_btn" text="Register" />
                    <Authbtn classes="auth_btns" pageChangeHandler={pageChangeHandler} pageid={2} id="login_btn" text="Login" />
                    <Authbtn classes="auth_btns" pageChangeHandler={pageChangeHandler} pageid={0} id="logout_btn" text="Logout" />
                    {/* <button className="auth_btns" id="register_btn">Register</button> */}
                    {/* <button className="auth_btns" id="login_btn">Login</button> */}
                    {/* <button className="auth_btns" style="display:none;" id="logout_btn">Logout</button> */}
                </div>
            </div>
        </div>
    </div>);
}

export default Header;