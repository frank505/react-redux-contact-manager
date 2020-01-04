import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import {signUp,resetAuthResponsePerComponent} from '../../store/actions/AuthAction'
 class Register extends Component {

 constructor(props)
 {
   super(props)
  this.state ={
    email:'',
    firstname:'',
    lastname:'',
    password:''
  }
 }

 componentDidMount = () =>
 {
  this.props.resetAuthResponsePerComponent();
 }

 

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log("submit button has been clicked")
    console.log(this.state);
    this.props.signUp(this.state);
  }


  handleChange = (e) =>{
    this.setState({
      [e.target.id] :e.target.value
    })
  }

    render() {
      const {authResponse} = this.props;
        return (
            <div>
               <h1>Register Here</h1>

             <form   autoComplete="off" onSubmit={this.handleSubmit}>
      <TextField
        id="firstname"
        label="firstname"
        style={{ margin: 8,maxWidth:1000 }}
        placeholder="enter your firstname"
        fullWidth
        margin="normal"
        variant="outlined"
        required
        onChange={this.handleChange}
      />
    
    <TextField
        id="lastname"
        label="lastname"
        style={{ margin: 8,maxWidth:1000 }}
        placeholder="enter your lastname"
        fullWidth
        margin="normal"
        variant="outlined"
        required
        onChange={this.handleChange}
      />

<TextField
        id="email"
        label="email"
        style={{ margin: 8,maxWidth:1000 }}
        placeholder="enter your email"
        fullWidth
        margin="normal"
        variant="outlined"
        required
        type="email"
        onChange={this.handleChange}
      />


       <TextField
        id="password"
        label="password"
        style={{ margin: 8,maxWidth:1000 }}
        placeholder="enter your password"
        fullWidth
        margin="normal"
        variant="outlined"
        type="password"
        required
        onChange={this.handleChange}
      /><br/>

<Button variant="contained" type="submit"  style={{width:1000}} color="primary" >
      Register
      </Button><br/>

<b>{authResponse!=null && authResponse!=""?authResponse:null}</b>

      </form> 
            </div>
        )

    }
}

const mapStateToProps = (state) =>{
  return {
    authResponse:state.auth.authResponse
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    signUp:(creds) => dispatch(signUp(creds)),
    resetAuthResponsePerComponent:() =>dispatch(resetAuthResponsePerComponent())

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Register)