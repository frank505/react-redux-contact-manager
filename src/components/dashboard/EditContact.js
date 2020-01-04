import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import DefaultImg from '../../img/default-img.png'
import {loadSingleDataUser,editContactUser} from '../../store/actions/ContactActions'

class EditContact extends Component {
    constructor(props)
    {
    super(props)
    this.state ={
        email:'',
        firstname:'',
        lastname:'',
        profile_image:'',
        phonenumber:'',
        file_directory:'',
        new_image:''
      }
    }

    componentDidMount = () =>{
        console.log(this.props);
        const { id } = this.props.match.params;
        this.props.loadSingleDataUser(id);
    }
  
   componentDidUpdate = async(prevProps,prevState) =>{
     if(prevProps.loadSingleContacts !== this.props.loadSingleContacts){
        let singleData = this.props.loadSingleContacts;
         this.setState({
            email:singleData.data.email,
            firstname:singleData.data.firstname,
            lastname:singleData.data.lastname,
           new_image:singleData.data.image_file,
            phonenumber:singleData.data.phonenumber,
            file_directory:singleData.file_directory  
         })
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
     const { id } = this.props.match.params;
     console.log(this.state);

     this.props.editContactUser(this.state,id);
     }



  render() {
    const {contactResponse} = this.props; 
    return (
        <div>
        <h1>Edit an existing contact</h1>

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
value = {this.state.firstname || ''}
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
value= {this.state.lastname || ''}
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
value = {this.state.email || ''}
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
value = {this.state.phonenumber}
/>

{
    <div>
        {
      this.state.new_image == "" ?
      <img src={DefaultImg} className="image-restyle" />
      :<img className="image-restyle" src={this.state.file_directory+"/"+this.state.new_image} />
        }
  
    </div>
}


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


const mapStateToProps = (state)=>{
    return{
        loadSingleContacts: state.contact.loadSingleContacts,
        contactResponse :state.contact.contactResponse
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loadSingleDataUser: (id) => dispatch(loadSingleDataUser(id)),
        editContactUser:(credentials,id) =>dispatch(editContactUser(credentials,id))
    
    }   
}


export default connect(mapStateToProps,mapDispatchToProps)(EditContact)