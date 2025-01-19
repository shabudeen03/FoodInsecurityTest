import "../../assets/stylesheets/register.css";
// import Input from "../html_components/Input.jsx";

import { useState } from "react";

function Input({ cssClass, inputType="text", inputId, inputName, inputPlaceholder="", inputValue="" }) {
    const [userInput, setUserInput] = useState(inputValue);    
    
    if(inputType === "submit") {
        return (
            <input className={cssClass} type={inputType} value={userInput} onChange={(event) => setUserInput(event.target.value)} />
        );
    }

    return (
        <input className={cssClass} type={inputType} id={inputId} name={inputName} placeholder={userInput} onChange={(event) => setUserInput(event.target.value)} />
    );
}

function Fullname() {
    return (<div className="register_form_names">
        <div className="register_form_name" style={{paddingRight: "20px"}}>
            <label className="auth_form_labels">First Name: </label>
            <br />
            {/* <input className="auth_input" type="text" id="fname" name="fname" placeholder="first name..." /> */}
            <Input cssClass="auth_input" inputId="fname" inputName="fname" inputPlaceholder="first name..." />
        </div>
    
        <div className="register_form_name" style={{paddingLeft: "20px"}}>
            <label className="auth_form_labels">Last Name: </label>
            <br />
            {/* <input className="auth_input" type="text" id="lname" name="lname" placeholder="last name..." /> */}
            <Input cssClass="auth_input" inputId="lname" inputName="lname" inputPlaceholder="last name..." />
        </div>
    </div>);
}

function Username() {
    return(<div className="auth_form_username">
        <label className="auth_form_labels register_form_label_uname" style={{float: "left"}}>Username</label>
        <br />
        {/* <input className="auth_input" type="text" id="uname" name="uname" placeholder="enter your username" /> */}
        <Input cssClass="auth_input" inputId="uname" inputName="uname" inputPlaceholder="enter your username" />
    </div>);
}

function Password({ type }) {
    let text = "Password";
    if(type === "again") text = "Re-enter Password";

    return (<div>
        <label className="auth_form_labels" style={{float: "left"}}>{text}</label>
        <br />
        {/* <input className="auth_input" type="text" id="passwd" name="passwd" /> */}
        <Input cssClass="auth_input" inputId="passwd" inputName="passwd" />
    </div>);
}

function Submit({ pageChangeHandler }) {
    return (<div>
        <button className="cancel_btn auth_input" onClick={() => pageChangeHandler(0)}>Cancel</button>
        {/* <input className="submit_btn auth_input" type="submit" value="Submit" /> */}
        <Input cssClass="submit_btn auth_input" inputType="submit" inputValue="Submit" />
    </div>);
}

function AuthForm({ page, pageChangeHandler }) {
    return (<section>
        <div className="auth_text">
            <h1>Register/Login</h1>
        </div>

        <div className="auth_form_wrapper">
            <form className="auth_form" method="GET">
                {(page === "register") && (<Fullname />)}
                <div className="auth_form_cred_field">
                    <Username />
                    <Password type="regular" />
                    {(page === "register") && <Password type="again" />}
                </div>
                <Submit pageChangeHandler={pageChangeHandler} />
            </form>
        </div>
    </section>);
}

/*
    Merge Register & Login Components, re-use components!

    Reuse fullname, username, password, and submit components
    
    Store state as either login or register

    If register, render: fullname, username, password (twice with proper text), and submit
    else it is login, render: username, password, submit
*/

export default AuthForm;