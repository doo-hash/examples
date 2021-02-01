import React from 'react';

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
            
        <div class = "container-sm border border-primary rounded-lg shadow-lg p-3 mb-5 rounded">
            
             <form action = "" method = "post" onSubmit = {this.handlesubmit}>
                
                <div class = "form-group w-50 p-3">
                    <label for name = "username">UserName</label>
                    <input type = "text" class= "form-control" id = "username" name = "username" placeholder = "enter your name." value = {this.state.username} onChange = {this.handlechange} required />
                </div>    
                <div class = "form-group w-50 p-3">
                    <label for name = "psd">Password</label>
                    <input type = "password" class = "form-control" id = "psd" name = "psd" placeholder = "enter your password" value = {this.state.psd} onChange = {this.handlechange} required />
                </div>
                <button type = "submit" class = "btn btn-primary btn-md btn-block active w-25" aria-pressed = "true">Login</button>
                
                <small>Forget <a href = "" class = "text-primary">Password?</a></small>
            
            </form>
            
            </div>
          
        );
    }
}
