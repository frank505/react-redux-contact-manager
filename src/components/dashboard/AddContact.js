import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import  { addContactUser } from  '../../store/actions/ContactActions'




 class AddContact extends Component {

    constructor(props)
    {
    super(props)
    this.state ={
        email:'',
        firstname:'',
        lastname:'',
        profile_image:'',
        phonenumber:'',
      }
    }

    handleChange = (e) =>{
        this.setState({
          [e.target.id] :e.target.value
        })
      }
    
    //this converts a blob type image to base64 encoded string
      getBase64 = (file,callback) => {
       const reader = new FileReader();
       reader.addEventListener('load',()=>callback(reader.result));
       reader.readAsDataURL(file);
      }


     fileTransform = (e) =>
     {
       this.getBase64(e.target.files[0],(base64String)=>{
         this.state.profile_image = base64String;
         console.log(this.state)
       })
     }

     handleSubmit = (e) =>{
     e.preventDefault();
     console.log(this.state);
     this.props.addContactUser(this.state)
     }

    render() {
      const {contactResponse} = this.props; 
        return (
            <div>
                  <h1>Adding a new contact</h1>

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
        type="email"
        onChange={this.handleChange}
      />
   

   <TextField
        id="phonenumber"
        label="phone"
        style={{ margin: 8,maxWidth:1000 }}
        placeholder="enter your phone number"
        fullWidth
        margin="normal"
        variant="outlined"
        required
        type="number"
        onChange={this.handleChange}
      />
     
     <input type="file" id="file_input"  onChange={this.fileTransform}/><br/>

       <br/>

<Button variant="contained" type="submit"  style={{width:1000}} color="primary" >
       Add A Contact
      </Button><br/>

        <b>{contactResponse!=null?contactResponse:null}</b>

      </form>
               
            </div>
        )
    }
}

const mapDisPatchToProps = (dispatch) =>{
  return {
    addContactUser:(creds) =>dispatch(addContactUser(creds))
  }
}

const mapStateToProps = (state) =>{
    return{
        contactResponse:state.contact.contactResponse
    }
}


export default connect(mapStateToProps,mapDisPatchToProps)(AddContact)