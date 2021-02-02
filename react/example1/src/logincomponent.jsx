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
           
        <div class = "container-sm pt-5 mt-5 border rounded-lg shadow-lg rounded">
            
             <form action = "" method = "post" onSubmit = {this.handlesubmit}>
                
                <div class = "form-group mx-auto w-75">
                    <label for name = "username">UserName</label>
                    <input type = "text" class= "form-control" id = "username" name = "username" placeholder = "enter your name." value = {this.state.username} onChange = {this.handlechange} required />
                </div>    
                <div class = "form-group mx-auto w-75">
                    <label for name = "psd">Password</label>
                    <input type = "password" class = "form-control" id = "psd" name = "psd" placeholder = "enter your password" value = {this.state.psd} onChange = {this.handlechange} required />
                </div>
                <button type = "submit" class = "btn btn-primary btn-md btn-block active w-25 mx-auto" aria-pressed = "true">Login</button>
                <div class = "pl-5 pt-1 pb-5">
                    <p class = "text-left">Forget <a href = "" class = "text-primary">Password?</a></p>
                </div>
             </form>
        </div>
       
          
        );
    }
}
