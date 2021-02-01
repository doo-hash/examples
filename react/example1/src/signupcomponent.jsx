import React from 'react';

export default class SignupComponent extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            fullname : '',
            firstname : '',
            lastname : '',
            country :'India',
            email : '',
            psd : '', 
            confirmpsd: '',
            description : ''
            };
            this.myChangeHandler = this.myChangeHandler.bind(this);
            this.mySubmitHandler = this.mySubmitHandler.bind(this);
        }
    
        myChangeHandler = (event) =>{
            
                const nam = event.target.name;
                const val = event.target.value;
                
                this.setState({[nam] : val});
        }
    
        mySubmitHandler = (event) => {
            event.preventDefault();
            if (this.state.psd !== this.state.confirmpsd){
              alert("password do not match");
            }
            else {
              alert("welcome " + this.state.fullname);
            }
        }
        render() {
          return (
            <div class = "container-md">
            <form action = "" method = "POST" onSubmit = {this.mySubmitHandler}>

              <div class = "align-items-center">
              <div class = "form-row">
                <div class = "form-group col-md-6">
                <label for = "firstname" >First Name</label>
                <input type = "text" class = "form-control" id = "firstname" name = "firstname" value = {this.state.firstname} onChange = {this.myChangeHandler} required />
              </div>

                <div class = "form-group col-md-6">
                  <label for = "lastname">Last Name</label>
                  <input type = "text" class = "form-control" id = "lastname" name = "lastname" value = {this.state.lastname} onChange = {this.myChangeHandler} required />
                </div>
              </div>

                <div class = "form-group">
                  <label for = "username">UserName</label>
                  <input type = "text" class = "form-control" id = "username" name = "username" value = {this.state.username} onChange = {this.myChangeHandler} required />
                </div>

                <div class = "form-group">
                  <label for = "country">Country</label>
                  <select class = "custom-select custom-select-sm" id= "country" name = "country" value = {this.state.country} onChange={this.myChangeHandler}>
                    <option value = " " > </option>
                    <option value = "India">INDIA</option>
                    <option value = "USA" >U.S.A</option>
                    <option value = "Nepal" >NEPAL</option>
                    <option value = "Japan" >JAPAN</option>
                    <option value = "SouthKorea">SOUTH KOREA</option>
                  </select>
                </div>
              
                <div class = "form-group">
                  <label for = "email">Email</label>
                  <input type="email" class = "form-control" id = "email" name ="email" value = {this.state.email} required onChange = {this.myChangeHandler} />
                </div>

                <div class = "form-group">
                  <label for = "psd">Password</label>
                  <input type="password" class = "form-control" id = "psd" name ="psd" aria-describedby = "psdhelp" value = {this.state.psd} required onChange = {this.myChangeHandler} />
                  <small id = "psdhelp" class = "form-text text-muted">
                  Your password must be 8-10 characters long, contain letters and numbers, and must not contain spaces, special characters.
                  </small>
                </div>          

                <div class = "form-group">
                  <label for = "confirmpsd">Confirm Password</label>
                  <input type="password" class = "form-control" id = "confirmpsd" name ="confirmpsd" aria-describedby = "confirmpsdhelp" value = {this.state.confirmpsd} required onChange = {this.myChangeHandler} />
                  <small id = "confirmpsdhelp" class = "form-text text-muted">
                  Your password must  match the above password.
                  </small>
                </div>          

                <div class = "form-group">
                  <label for = "description">Description</label>
                  <textarea class = "form-control" id = "description" name = "description" value = {this.state.description} onChange={this.myChangeHandler} />
                </div>

                <button type="submit" class= "btn btn-primary btn-lg active" name ="submit" aria-pressed = "true">Sign Up</button>        
            </div>
            </form>
            </div>
          );
        }
      }