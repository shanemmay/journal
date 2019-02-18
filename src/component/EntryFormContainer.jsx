import React, { Component } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import '../css/main.css';

class EntryFormContainer extends Component {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            "form":"login",
            "buttons":["login","signup","forgot?"]
        };
        this.formChange = this.formChange.bind(this);
    }
    formChange(btnSelected)
    {
        let b = btnSelected.toLowerCase();
        console.log(b);
        if(b == "login")
        {
            this.setState(
                {
                    "form":"login",
                });
        }
        else if (b == "signup")
        {
            this.setState(
                {
                    "form":"signup",
                });
        }
        else if (b == "forgot?")
        {
            this.setState(
                {
                    "form":"forgot?",
                });
        }
    }
    render() {
        return (
            <div>

{/* <div className="card text-center" style="width: 18rem;">
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

<div className=" conatiner card text-center" id="EntryFormContainer">
    <div className="card-body">
        <h5 className="card-title">{this.state.form}</h5>
        <div className="tab-content" id="pills-tabContent">
            <div className={"tab-pane fade "  + ((this.state.form == this.state.buttons[0]) ? "show active" : "" )} id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <LoginForm changeAuth={this.props.changeAuth} setUser={this.props.setUser}/>
            </div>
            <div className={"tab-pane fade "  + ((this.state.form == this.state.buttons[1]) ? "show active" : "" )} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <SignupForm changeAuth={this.props.changeAuth} setUser={this.props.setUser}/>
            </div>
            <div className={"tab-pane fade "  + ((this.state.form == this.state.buttons[2]) ? "show active" : "" )} id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <ForgotPasswordForm />
            </div>
        </div>
        {/* TODO : put current form button above and center the tabs */}
        <ul className="row nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="col nav-item">
                <a className={"nav-link " + ((this.state.form == this.state.buttons[0]) ? "active" : "" )} id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => this.formChange(this.state.buttons[0])}>{this.state.buttons[0]}</a>
            </li>
            <li className="col nav-item">
                <a className={"nav-link " + ((this.state.form == this.state.buttons[1]) ? "active" : "" )} id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => this.formChange(this.state.buttons[1])}>{this.state.buttons[1]}</a>
            </li>
            <li className="col nav-item">
                <a className={"nav-link " + ((this.state.form == this.state.buttons[2]) ? "active" : "" )} id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={() => this.formChange(this.state.buttons[2])}>{this.state.buttons[2]}</a>
            </li>
        </ul>
    </div>
</div>         
            </div>
        );
    }
}

export default EntryFormContainer;
