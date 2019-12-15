import {addNewContact} from '../services/ContactService'

export const addContactUser = (credentials) =>{
    return (dispatch) =>{
       addNewContact(credentials).then((res)=>{
            console.log(res);
                dispatch({type:'NEW_CONTACT_SUCCESS',res})
        },
        error=>{
            dispatch({type:'NEW_CONTACT_CODE_ERROR',error});
        }
        
        )
    }
}