import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Pagination from 'rc-pagination'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {connect} from 'react-redux'
import {loadContactUser,loadSearchContactUser } from '../../store/actions/ContactActions'


  

 class ViewContact extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
          search_content:""
        }
    }

   componentDidMount = () =>{
     const page = "";
     this.props.loadContactUser(page);
   }

    handleKeyUp = async (e) =>{
      await  this.setState({
          [e.target.id] :e.target.value
        })
        console.log(this.state)
      if(this.state.search_content==""){

      }else{
        let page ="";
        this.props.loadSearchContactUser(this.state.search_content,page);
      }
      }

     onChange = (currentPage) =>{
       if(this.state.search_content==""){
        this.props.loadContactUser(currentPage)
       }else {
         this.props.loadSearchContactUser(this.state.search_content,currentPage)
       }
      
      }

    render() {

      const {loadContacts} = this.props;   
    


        return (
            <div>


<TextField
        id="search_content"
        label="search"
        style={{ margin: 8,maxWidth:1000 }}
        placeholder="enter your firstname"
        fullWidth
        margin="normal"
        required
        onKeyUp={this.handleKeyUp}
      />


      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>firstname</TableCell>
            <TableCell align="right">lastname</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">phonenumber</TableCell>
            <TableCell align="right">profile image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loadContacts? loadContacts.data.data.map(row => (
            <TableRow key={row.id }>
              <TableCell component="th" scope="row">
                {row.firstname}
              </TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phonenumber}</TableCell>
              <TableCell align="right">
              
                <img src={loadContacts.file_directory+"/"+row.image_file} width={50} height={50} /></TableCell>
            </TableRow>
          ))
        :null
        }
        </TableBody>
      </Table>

          {loadContacts? 
      <Pagination defaultPageSize={2} current={loadContacts.data.current_page}
      className="pagination-restyle"
      total={loadContacts.data.total} 
      onChange={this.onChange} 
      prevIcon={<ArrowBackIosIcon/>}
      jumpNextIcon={<ArrowForwardIcon/>}
       jumpPrevIcon={<ArrowBackIcon/>}
       nextIcon={<ArrowForwardIosIcon/>}
      />
      : null
        }
            </div>
        )
        
      }

    }

const mapStateToProps = (state)=>{
    return{
        loadContacts: state.contact.loadContacts
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        loadContactUser: (page) => dispatch(loadContactUser(page)),
        loadSearchContactUser :(search_content,page) => dispatch(loadSearchContactUser(search_content,page))
    }   
}



export default connect(mapStateToProps,mapDispatchToProps)(ViewContact)



