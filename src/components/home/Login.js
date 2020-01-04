import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import {UserLogin,resetAuthResponsePerComponent} from '../../store/actions/AuthAction'


 class Login extends Component {


  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:''
    }
  }

 componentDidMount = () =>
 {
   this.props.resetAuthResponsePerComponent();
 }

   handleSubmit = (e)=>{
   e.preventDefault();
   console.log('ready to log a user in')
   console.log(this.state)
   this.props.UserLogin(this.state,this.props.history)
   }

   handleChange = (e) =>{
     e.preventDefault();
     this.setState({
      [e.target.id] :e.target.value
    })
   }

    render() {
      const {authResponse} = this.props;
        return (
            <div>
               <h1>Login Here</h1>

             <form   autoComplete="off" onSubmit={this.handleSubmit}>
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
        onChange = {this.handleChange}
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
        onChange = {this.handleChange}
      /><br/>

<Button variant="contained" type="submit" style={{width:1000}} color="primary" >
      Login
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
    UserLogin:(creds,history) => dispatch(UserLogin(creds,history)),
    resetAuthResponsePerComponent:() =>dispatch(resetAuthResponsePerComponent()),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)
