import React, { Component } from 'react';
const axios = require('axios');

class ForgotPasswordForm extends Component {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            email:"",
            username:"",
            password:""
        };
        this.setEmail = this.setEmail.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.authUser = this.authUser.bind(this);
    }
    setEmail(e)
    {
        this.setState({email:e.target.value});
    }
    setUsername(e)
    {
        this.setState({username:e.target.value});
    }
    setPassword(e)
    {
        this.setState({password:e.target.value});
    }
    authUser(e)
    {
        //auth user using backend services in heroku
        //console.log(this.state);
        axios.get('change_this'/*`https://backend-services.herokuapp.com/journalRoot/login?email=${this.state.email}&username=${this.state.username}&password=${this.state.password}`*/)
        .then( (res) =>
        {
            console.log('success');
            console.log(res);
        })
        .catch( (err) =>
        {
            console.log('error');
            console.log(err);
        })
        .then( () =>
        {
            console.log('axios ajax finished');
        }); 
        e.preventDefault();
    }
    render() {
        /**
         * SHANE MAKE A ONCLICK CALL TO AUTH USER!!!!!!!
         * user heroku because everytime you push to github it'll 
         * over write the json data files in azure
         * https://backend-services.herokuapp.com/
         */
        return (
            <div>              
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onKeyUp={this.setEmail} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" aria-describedby="username" placeholder="Username" onKeyUp={this.setUsername}/>
                    </div>
                    <button type="submit" class="btn btn-outline-primary" onClick={this.authUser}>Submit</button>
                </form>
                <br></br>
            </div>
        );
    }
}

export default ForgotPasswordForm;
