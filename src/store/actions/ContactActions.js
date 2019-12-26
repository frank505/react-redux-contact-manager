import {addNewContact,loadContacts,loadSearchContacts } from '../services/ContactService'

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



export const loadContactUser = (page) =>{
    return (dispatch) =>{
        loadContacts(page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_CONTACTS',res});
        },
        error=>{
            dispatch({type:'FETCH_CONTACT_ERROR',error})
            console.log(error)
        }    
        )
    }
}


export const loadSearchContactUser = (search_content,page) =>{
    return (dispatch) =>{
        loadSearchContacts(search_content,page).then((res)=>{
            console.log(res)
            dispatch({type:'LOAD_CONTACTS_SEARCH',res});
        },
        error=>{
            dispatch({type:'FETCH_CONTACT_ERROR',error})
            console.log(error)
        }    
        )
    }
}