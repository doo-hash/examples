import React from 'react';
import SignupComponent from './signupcomponent';

export default class LoginComponent extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                username :'',
                psd : ''
            };

            this.handlechange = this.handlechange.bind(this);
            this.handlesubmit = this.handlesubmit.bind(this);
            
    }

    handlechange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name] : value});
    }

    handlesubmit(event){
        alert( this.state.username + " have logged in");
        event.preventDefault();
    }

    render(){
        return(
            <span class = "border border-primary">
        <div class = "login-component">
            
             <form action = "" method = "post" onSubmit = {this.handlesubmit}>
                
                <div class = "form-group">
                    <label for name = "username">UserName</label>
                    <input type = "text" class= "form-control" id = "username" name = "username" placeholder = "enter your name." value = {this.state.username} onChange = {this.handlechange} required />
                </div>    
                <div class = "form-group">
                    <label for name = "psd">Password</label>
                    <input type = "password" class = "form-control" id = "psd" name = "psd" placeholder = "enter your password" value = {this.state.psd} onChange = {this.handlechange} required />
                </div>
                
                <input type = "submit" name = "Login" value = "Login"  />
                <br />
                <small>Forget <a href = "">Password?</a></small>
            
            </form>
            <button type = "submit" class = "btn btn-primary" name = "signin" onClick = {this.signupcomp} >Sign In</button> 
            
            </div>
            </span>
        );
    }
}
