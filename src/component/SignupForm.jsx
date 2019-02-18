import React, { Component } from 'react';
const axios = require('axios');

class SignupForm extends Component {
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
        //console.log(this.state); /signup?email=test2@test.com&username=test2&password=test2
        axios.get(`https://backend-services.herokuapp.com/journalRoot/signup?email=${this.state.email}&username=${this.state.username}&password=${this.state.password}`)
        .then( (res) =>
        {
            console.log('success');
            console.log(res);
            if( res.data.includes("saved") )
            {
                this.props.changeAuth();
                this.props.setUser(
                    {
                        email:this.state.email,
                        username:this.state.username,
                        password:this.state.password
                    }
                );
            }      
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
                    <div className="form-group">
                        {/* <label for="exampleInputEmail1">Email</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onKeyUp={this.setEmail} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        {/* <label for="username">Username</label> */}
                        <input type="text" className="form-control" id="username" aria-describedby="username" placeholder="Username" onKeyUp={this.setUsername}/>
                    </div>
                    <div className="form-group">
                        {/* <label for="exampleInputPassword1">Password</label> */}
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onKeyUp={this.setPassword}/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary" onClick={this.authUser}>Signup</button>
                </form>
                <br></br>
            </div>
        );
    }
}

export default SignupForm;
